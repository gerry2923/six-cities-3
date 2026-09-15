import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { TOffer, TReview } from '../../components/tconst';
import { AutorizationStatus } from '../../components/const';
import NotFound from '../../components/not-found/notFound';
import Login from '../login-screen/login';
import Map from '../../components/map/map';
import Reviews from '../../components/reviews/rerviews';
import ReviewForm from '../../components/reviews/review-form';
import OfferList from '../../components/offer/offer-list';


function Insides({offer} : {offer: TOffer}){

  if(!offer?.goods || offer.goods?.length === 0) {
    return null;
  }

  const insides = offer.goods.map((good, index) => ({
    id: index,
    goodItem: good,
  }));

  return (
    <>
      {
        insides.map((good) => (<li className="offer__inside-item" key={good.id}>{good.goodItem}</li>))
      }
    </>
  );
}

function OfferImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imageUrl} alt="Photo studio" />
    </div>
  );
}

function OfferImages({ offer }: { offer: TOffer | null }) {
  if (!offer?.images || offer.images.length === 0) {
    return null;
  }

  let images = offer.images.map((imageUrl, index) => ({
    id: index,
    url: imageUrl,
  })
  );

  if (images.length > 6) {
    images = images.slice(0, 6);
  }

  return (
    <>
      {
        images.map((image) => (
          <OfferImage key={image.id} imageUrl={image.url} />
        ))
      }
    </>
  );
}

type TOfferScreen = {
  offers: TOffer[];
  reviews: TReview[];
  autorizationStatus: AutorizationStatus;
}


// отрисуй offer
// смотрим, авторизированный пользователь или нет + проверяем по id есть ли такое предложение или нет
function OfferScreen({ offers, reviews, autorizationStatus }: TOfferScreen) {
  const { id } = useParams();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);


  // eslint-disable-next-line no-console
  const currentOffer: TOffer | undefined = offers.find((offer: TOffer) => offer.id === id?.trim().slice(1)
  );

  if (!currentOffer) {
    // фокус с типами
    // return <NotFound type={offer}/>;
    return <NotFound type='offer'/>;
  }

  const isAuth = autorizationStatus === AutorizationStatus.Auth;

  if (!isAuth) {
    return <Login />;
  }

  const rating = `${(currentOffer.rating * 100 / 5).toString()}%`;

  // найти все отзывы для данного предложения
  const currentOfferReviews = reviews.filter((review) => review.offerId === currentOffer.id);
  const favoritesNumber = offers.filter((offer) => offer.isFavorite === true).length;
  const nearbyOffers = offers.filter((offer) => offer.city.name === currentOffer.city.name);
  const nearbyOffersToShow = nearbyOffers.length > 3 ? nearbyOffers.slice(0, 3) : nearbyOffers;

  const handleActivOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Предложение</title>
      </Helmet>

      <Header userEmail={'oliver@mail.ru'} favoritesCount={favoritesNumber} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferImages offer={currentOffer} />
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: rating }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">rating</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{currentOffer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&lsquo;s inside</h2>
                <ul className="offer__inside-list">
                  <Insides offer={currentOffer} />
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>


              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{currentOfferReviews.length}</span>
                </h2>
                <Reviews reviews={currentOfferReviews}/>
                {isAuth && <ReviewForm />}
              </section>
            </div>
          </div>

          <Map city={currentOffer.city} offers={nearbyOffersToShow} activeOfferId={activeOfferId} className={'offer__map'}/>
          {/* <section className="offer__map map" /> */}
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <OfferList offers={nearbyOffersToShow} onActiveOfferChange={handleActivOfferChange} />
            </div>
          </section>
        </div>
      </main>


    </Fragment>

  );
}

export default OfferScreen;
