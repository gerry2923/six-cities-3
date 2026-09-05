import { Link } from 'react-router-dom';
import { TOffer } from '../tconst';
import { AppRoute } from '../const';

type TOfferCard = {
  offer: TOffer;
  onHover: (offer?: TOffer) => void;
}


function OfferCard({ offer, onHover }: TOfferCard) {


  const route = `${AppRoute.Offer.slice(0, -2)}${offer.id}`;
  const handleMouseOn = () => {
    onHover(offer);
  };

  const handleMouseOff = () => {
    onHover();
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
    <Link to={route} >
      <article
        className="cities__card place-card"
        onMouseOver={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {premium}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={offer.previewImage}
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{offer.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${favorite}`} type="button">
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
            <a href="#">{offer.city.name}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>


  );
}


export default OfferCard;
