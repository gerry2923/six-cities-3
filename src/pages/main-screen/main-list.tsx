import OfferList from '../../components/offer/offer-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { TOffer, TSortType } from '../../components/types';
import { useEffect } from 'react';
import { useActionCreators, useAppDispatch, useAppSelector } from '../../store/hooks';
import { offersActions, selectOffersLoading } from '../../store/offers/offers-slice';
import { selectActiveCityLocation, selectSortedOffers, selectSortedOffersLength } from '../../store/offers/offers-selectors';
import { selectActiveCity, selectActiveOfferId, selectSortType, uiActions } from '../../store/ui/ui-slice';
import Spinner from '../../components/spinner/spinner';


export function MainList(): JSX.Element {

  const dispatch = useAppDispatch();
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { setActiveOfferId, setSortType} = useActionCreators(uiActions);
  const sortedOffersLength = useAppSelector(selectSortedOffersLength);
  const isLoading = useAppSelector(selectOffersLoading);
  const activeCity = useAppSelector(selectActiveCity);
  const sortType = useAppSelector(selectSortType);
  const sortedOffers = useAppSelector(selectSortedOffers);
  const activeOfferId = useAppSelector(selectActiveOfferId);
  const activeCityLocation = useAppSelector(selectActiveCityLocation);

  // добавили загрузку предложений
  useEffect(() => {
    //  && !isLoading
    if (sortedOffersLength === 0) {
      fetchAllOffers()
        .unwrap()
        .catch(() => {
          //перепиши код с использованием toast уведомления об ошибке
          console.error('error при загрузке приложений');
        });
    }

  }, [dispatch, fetchAllOffers, sortedOffersLength]);


  const handleActiveOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };

  const handleSortChange = (option: TSortType): void => {
    setSortType(option);

  };

  if(isLoading) {
    return (<Spinner />);
  }
  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {sortedOffersLength} places to stay in {activeCity}
        </b>

        <Sorting sortType={sortType} onSortChange={handleSortChange} />

        <div className='cities__places-list places__list tabs__content'>
          <OfferList
            key={activeCity}
            offers={sortedOffers}
            onActiveOfferChange={handleActiveOfferChange}
          />
        </div>
      </section>

      <div className='cities__right-section'>
        {
          activeCityLocation &&
          <Map
            city={activeCityLocation}
            offers={sortedOffers}
            activeOfferId={activeOfferId}
            className='cities__map'
          />
        }
      </div>
    </div>
  );
}
