import { Link } from 'react-router-dom';
import { TOffer } from '../types';
import { AppRoute } from '../const';
import { useFavoriteClick } from '../../hooks/use-favorite-click';


type TOfferCard = {
  offer: TOffer;
  onOfferHover?: (offer: TOffer | null) => void;
}

// маленькая карточка на главной странице
function OfferCard({ offer, onOfferHover }: TOfferCard) {
  const handleClick = useFavoriteClick();

  // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  // const navigate = useNavigate();
  // // Returns the current Location.
  // const location = useLocation();

  // const status = useAppSelector(selectAuthorizationStatus);
  // const isAuth = AutorizationStatus.Auth === status;

  // const route = `${AppRoute.Offer.slice(0, -2)}${offer.id}`;
  // console.log(route);
  // маршрут для перехода на страницу карточки
  // const route = `${AppRoute.Offer.replace(':id', ':')}${offer.id}`;
  const route = `${AppRoute.Offer}/${offer.id}`;

  //  наведение мышки по карточке и отведение --> приводит к изменению ActiveOfferId и подсвечиванию накарте
  const handleMouseOver = () => {
    // передаем оффер этой карты
    onOfferHover?.(offer);
  };

  const handleMouseLeave = () => {
    onOfferHover?.(null);
  };
  // вот этот обработчик кликов
  const handleFavoriteClick = () => {
    handleClick(offer.id, offer.isFavorite);
  };

  const rating = `${(offer.rating * 100 / 5).toString()}%`;

  const premium = offer.isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const favorite = offer.isFavorite ?
    'place-card__bookmark-button--active' : '';

  return (
    <article
      className="cities__card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={route}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favorite}`} type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={route}>{offer.city.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>


  );
}


export default OfferCard;
