import { TFavoritesByCity } from '../../pages/favorites-screen/favorites-types';
import { TOffer } from '../tconst';


function FavoriteCard({offer}: {offer: TOffer}) {
  const premium = offer.isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const rating = `${(offer.rating * 100 / 5).toString()}%`;

  return (
    <article className='favorites__card place-card'>
      {premium}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img
            className='place-card__image'
            src={offer.previewImage}
            width={150}
            height={110}
            alt='Place image'
          />
        </a>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{offer.price}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>
          <button
            className='place-card__bookmark-button place-card__bookmark-button--active button'
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: rating }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}


function FavoriteCity({ cityFavorites }: { cityFavorites: TFavoritesByCity }): JSX.Element {
  const { city: cityName, favoriteOffers } = cityFavorites;

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {favoriteOffers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

function Favorites({ favorites }: { favorites: TFavoritesByCity[] }): JSX.Element {
  return (
    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>

            {
              favorites.map((favorite) =>
                (
                  <FavoriteCity
                    key={favorite.city}
                    cityFavorites={favorite}
                  />
                ))
            }
          </ul>
        </section>
      </div>
    </main>

  );
}


export default Favorites;
