import Header from '../../components/header/header';
import LocationNavigation from '../../components/location-navigation/location-navigation';
import OfferList from '../../components/offer/offer-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';

import { Helmet } from 'react-helmet-async';
import { useActionCreators, useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectActiveCity, selectSortType, setActiveCity, setSortType } from '../../store/filters/filters-slice';
import { useEffect, useState } from 'react';
import { SortType } from '../../components/const';
import { TOffer, TSortType } from '../../components/types';
import { selectActiveCityLocation, selectAllCitiesNames, selectSortedOffers } from '../../store/offers/selectors';
import { offersActions } from '../../store/offers/offers-slice';


function MainScreen(): JSX.Element {

  const dispatch = useAppDispatch(); // для передачи

  const { fetchAllOffers } = useActionCreators(offersActions);
  const activeCity = useAppSelector(selectActiveCity); // для принятия

  // этот массив должен быть статичный
  const allCities = useAppSelector(selectAllCitiesNames);

  // предложения подгружаются в селектор selectSortedOffers
  const sortedOffers = useAppSelector(selectSortedOffers); // для принятия

  const activeCityLocation = useAppSelector(selectActiveCityLocation);
  const sortType = useAppSelector(selectSortType);

  // id предложения, которое выделено курсором мышки
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  // добавили загрузку предложений
  useEffect(() => {
    if (sortedOffers.length === 0) {
      fetchAllOffers()
        .unwrap()
        .catch(() => {
          console.error('error при загрузке приложений');
        });
    }

  }, [fetchAllOffers, sortedOffers.length]);


  // нажатие на таб с городом
  const handleCityChange = (cityName: string): void => {
    if (!cityName) {
      return;
    }
    // установили новое значение города
    dispatch(setActiveCity(cityName));
    // обнулили сортировку
    dispatch(setSortType(SortType.Popular));
    // обнулили выделенную мышкой карточку предложенжия
    setActiveOfferId(null);

  };

  const handleActiveOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };

  const handleSortChange = (option: TSortType): void => {
    dispatch(setSortType(option));

  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Основной экран</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationNavigation
              activeCity={activeCity}
              cityNames={allCities}
              onLocationClick={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {activeCity}
              </b>

              <Sorting sortType={sortType} onSortChange={handleSortChange} />

              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  key={activeCity}
                  offers={sortedOffers}
                  onActiveOfferChange={handleActiveOfferChange}
                />
              </div>
            </section>

            <div className="cities__right-section">
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
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
