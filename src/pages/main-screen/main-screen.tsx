import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationNavigation from '../../components/location-navigation/location-navigation';
import OfferList from '../../components/offer/offer-list';
import type TMain from './main-screen-types';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectActiveCity, selectSortType, setActiveCity, setSortType } from '../../store/city-offers-slice';
import { useEffect, useState } from 'react';
import { DEFAULT_CITY_NAME, SortType } from '../../components/const';
// import { useState } from 'react';
import { TOffer, TSortType } from '../../components/tconst';
import { selectActiveCityLocation, selectAllCitiesNames, selectSortedOffers } from '../../store/selectors';
// import { setOffers } from '../../store/offers-slice';


/**
 *TODO:
 *  как попадут моки в стор?
 */

function MainScreen({ userEmail, favoritesCount }: TMain): JSX.Element {

  // ДОБАВЛЯЕМ ЛОГИКУ SLICE
  const dispatch = useAppDispatch(); // для пенредачи

  const activeCity = useAppSelector(selectActiveCity); // для принятия
  const allCities = useAppSelector(selectAllCitiesNames);
  const sortedOffers = useAppSelector(selectSortedOffers); // для принятия
  const activeCityLocation = useAppSelector(selectActiveCityLocation);
  const sortType = useAppSelector(selectSortType);

  // id предложения, которое выделено курсором мышки
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);


  // Сначала устанавливаем город
  // TODO: после добавления сервера убрать useEffect и сделать через сервер
  useEffect(() => {
    if (activeCity === '' && allCities.length > 0) {
      dispatch(setActiveCity(DEFAULT_CITY_NAME));
    }
  }, [activeCity, allCities, dispatch]);

  // нажатие на таб с городом
  const handleCityChange = (cityName: string) : void => {
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

  const handleActivOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };

  const handleSortChange = (option: TSortType) : void => {
    dispatch(setSortType(option));

  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Основной экран</title>
      </Helmet>
      <Header userEmail={userEmail} favoritesCount={favoritesCount} />
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

              <Sorting sortType={sortType} onSortChange={handleSortChange}/>

              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={sortedOffers} onActiveOfferChange={handleActivOfferChange} />
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
