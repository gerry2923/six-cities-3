import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationNavigation from '../../components/location-navigation/location-navigation';
import OfferList from '../../components/offer/offer-list';
import type TMain from './main-screen-types';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useState } from 'react';
import { TOffer } from '../../components/tconst';


/**
 *TODO:
 *  активный город, - тот, который
 *
 *
 *
 */

function MainScreen({ userEmail, favoritesCount, defaultCity, places = [] }: TMain): JSX.Element {
  // activeCity - город, выбранный в шапке меню -> перерисовывает карту и карточки
  const [activeCity, setActiveCity] = useState<string>(defaultCity);


  // activeLocation - активная карта, т.е. на которую навели курсор мышки -> меняет внешний вид карты и пин на карте становится другого цвета. ???? как сделать пин, другой установка правильного src???
  const [activeLocation, setActiveLocation] = useState<TOffer | undefined>();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);


  // Вычисляем активный город и отфильтрованные предложения на основе activeCity
  const activeCityLocation = places.find((place) => place.city.name === activeCity)?.city;
  const filteredPlaces = places.filter((place) => place.city.name === activeCity);
  const allCities = Array.from(new Set(places.map((place) => place.city.name)));

  //?? где обновлять activeCityLocation? 
  const handleActiveCityClick = (cityName: string): void => {
    if (cityName) {
      setActiveCity(cityName);
    }
  };

  const handleActivCardClick = (offer: TOffer): void => {
    if(offer) {
      setActiveLocation(offer);
      setActiveOfferId(offer.id);
    }
  }

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
              onLocationClick={handleActiveCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredPlaces.length} places to stay in {activeCity}
              </b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={filteredPlaces} onActiveOfferChange={handleActivCardClick}/>
              </div>
            </section>

            <div className="cities__right-section">
              {
                activeCityLocation &&
                <Map city={activeCityLocation} offers={filteredPlaces} activeOfferId={activeOfferId}/>
              }

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
