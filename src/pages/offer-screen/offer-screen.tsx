import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { TOffer } from '../../components/types';
import Map from '../../components/map/map';
import OfferList from '../../components/offer/offer-list';
import { useActionCreators, useAppSelector, useAuth } from '../../store/hooks';
import { offerActions, offerSelectors } from '../../store/offer/offer-slice';
import Spinner from '../../components/spinner/spinner';
import NotFound from '../../components/not-found/notFound';
import { RequestStatus } from '../../components/const';
import { commentsActions } from '../../store/comments/comments-slice';
import CommentForm from '../../components/comments/comment-form';
import Comments from '../../components/comments/comments';
import { useFavoriteClick } from '../../hooks/use-favorite-click';
import { favoritesActions } from '../../store/favorites/favorites-slice';
import { selectFavoritePendingIds } from '../../store/favorites/favorites-selectors';
import { selectNearbyOffersWithFavorites, selectOfferWithFavorites } from '../../store/offer/offer-selectors';
import { selectSortedCommentsByDate } from '../../store/comments/comments-selectors';


function Insides({ offer }: { offer: TOffer }) {

  if (!offer?.goods || offer.goods?.length === 0) {
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


// отрисуй offer
// смотрим, авторизированный пользователь или нет + проверяем по id есть ли такое предложение или нет
function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const { fetchOffer, fetchNearBy, clear } = useActionCreators(offerActions);
  const { fetchComments, clearComments } = useActionCreators(commentsActions);
  const { fetchFavorites } = useActionCreators(favoritesActions);

  const currentOffer = useAppSelector(selectOfferWithFavorites);
  const nearbyOffers = useAppSelector(selectNearbyOffersWithFavorites);
  const status = useAppSelector(offerSelectors.offerStatus);
  const isAuth = useAuth();

  const comments = useAppSelector(selectSortedCommentsByDate);
  const pendingIds = useAppSelector(selectFavoritePendingIds);

  const handleClick = useFavoriteClick();

  useEffect(() => {
    if (!id) {
      return;
    }

    clearComments();
    fetchOffer(id);
    fetchNearBy(id);
    fetchComments(id);

    return () => {
      clear();
    };
  }, [fetchOffer, fetchNearBy, id, clear, fetchComments, clearComments]);

  useEffect(() => {
    if (isAuth) {
      fetchFavorites();
    }
  }, [isAuth, fetchFavorites]);

  if (!id) {
    return <NotFound type={'page'} />;
  }

  if (status === RequestStatus.Loading || status === RequestStatus.Idle) {
    return <Spinner />;
  }

  if (status === RequestStatus.Failed) {
    return <NotFound type={'page'} />;
  }

  if (!currentOffer) {
    return <NotFound type={'other'} />;
  }

  const isPending = Boolean(pendingIds[id]);
  const nearbyOffersForMap = [currentOffer, ...nearbyOffers.slice(0, 3)];
  const rating = `${(currentOffer.rating * 100) / 5}%`;

  const favorite = currentOffer.isFavorite ?
    'offer__bookmark-button--active' : '';

  const handleFavoriteClick = () => {
    if(isPending) {
      return;
    }
    handleClick(id , currentOffer.isFavorite);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Предложение</title>
      </Helmet>

      <Header />
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
                <button
                  className={`offer__bookmark-button button ${favorite}`}
                  type="button"
                  onClick={handleFavoriteClick}
                  disabled={isPending}
                >
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
                  Reviews · <span className="reviews__amount">{comments.length}</span>
                </h2>

                <Comments comments={comments} />
                {isAuth && <CommentForm />}
              </section>

            </div>
          </div>

          <Map
            city={currentOffer.city}
            offers={nearbyOffersForMap}
            activeOfferId={id}
            className={'offer__map'}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <OfferList offers={nearbyOffers} />
            </div>
          </section>
        </div>
      </main>


    </Fragment>

  );
}

export default OfferScreen;
