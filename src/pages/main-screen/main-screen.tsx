import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationNavigation from '../../components/location-navigation/location-navigation';
import OfferList from '../../components/offer/offer-list';
import type TMain from './main-screen-types';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectActiveCity, selectOffersByCity, setActiveCity, setOffersByCity } from '../../store/city-offers-slice';
import { useEffect, useState } from 'react';
import { DEFAULT_CITY_NAME } from '../../components/const';
// import { useState } from 'react';
import { TCity, TOffer } from '../../components/tconst';


/**
 *TODO:
 *  активный город, - тот, который
 */

function MainScreen({ userEmail, favoritesCount, allCities, places = [] }: TMain): JSX.Element {
/*  // activeCity - город, выбранный в шапке меню -> перерисовывает карту и карточки
  const [activeCity, setActiveCity] = useState<string>(defaultCity?.name ?? '');
  // Вычисляем активный город и отфильтрованные предложения на основе activeCity
  const [activeCityLocationTab, setActiveCityLocationTab] = useState<TCity | undefined>(defaultCity);

  // activeLocation - активная карта, т.е. на которую навели курсор мышки -> меняет внешний вид карты и пин на карте становится другого цвета. ???? как сделать пин, другой установка правильного src???
  // const [activeLocation, setActiveLocation] = useState<TOffer | undefined>();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const filteredPlaces = places.filter((place) => place.city.name === activeCity);
  const allCities = Array.from(new Set(places.map((place) => place.city.name)));

  //?? где обновлять activeCityLocationTab?
  const handleCityChange = (cityName: string): void => {
    if (!cityName) {
      return;
    }

    const newLocation = places.find((p) => p.city.name === cityName)?.city;

    setActiveCity(cityName);
    setActiveCityLocationTab(newLocation);
    setActiveOfferId(null);
  };

  const handleActivOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };
*/

  // ДОБАВЛЯЕМ ЛОГИКУ SLICE
  const dispatch = useAppDispatch(); // для пенредачи
  const activeCity = useAppSelector(selectActiveCity); // для принятия
  const offersByCity = useAppSelector(selectOffersByCity); // для принятия

  const defaultCityName = DEFAULT_CITY_NAME;
  const defaultCity = places.find((place) => place.city.name === defaultCityName)?.city;
  // тут нам надо сохранить объект TCity, чтобы передать его в карту для извлечения КООРДИНАТ
  // нужно добавить объект города по умолчанию
  const [activeCityTab, setActiveCityTab] = useState<TCity | undefined>(defaultCity);
  // id предложения, которое выделено курсором мышки
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  // названия всех городов, для установки во вкладках заголовка
  // const allCities = Array.from(new Set(places.map((place) => place.city.name)));

  // Сначала устанавливаем город
  // TODO: после добавления сервера убрать useEffect и сделать через сервер
  useEffect(() => {
    if (activeCity === '' && places.length > 0) {

      dispatch(setActiveCity(defaultCityName));
      dispatch(
        setOffersByCity(places.filter((place) => place.city.name === DEFAULT_CITY_NAME))
      );
      setActiveCityTab(defaultCity);
    }
  }, [activeCity, dispatch, places.length, places, defaultCityName, defaultCity]);

  // нажатие на таб с городом
  const handleCityChange = (cityName: string) : void => {
    if (!cityName) {
      return;
    }

    const newLocation = places.find((place) => place.city.name === cityName)?.city;

    dispatch(setActiveCity(cityName));
    setActiveCityTab(newLocation);
    setActiveOfferId(null);
    dispatch(setOffersByCity(places.filter((place) => place.city.name === cityName)));

  };

  const handleActivOfferChange = (offer: TOffer | null): void => {
    setActiveOfferId(offer?.id ?? null);
  };

  const handleSortChange = (option: string) : void => {
    console.log(option);
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
                {offersByCity.length} places to stay in {activeCity}
              </b>
              <Sorting onSortChange={handleSortChange}/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offersByCity} onActiveOfferChange={handleActivOfferChange} />
              </div>
            </section>

            <div className="cities__right-section">
              {
                activeCityTab &&
                <Map
                  city={activeCityTab}
                  offers={offersByCity}
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
