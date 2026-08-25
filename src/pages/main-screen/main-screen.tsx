import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Places from '../../components/places/places';
import { Helmet } from 'react-helmet-async';

import type TMain from './main-screen-types';

function MainScreen({ userEmail, favoritesCount, places = [] }: TMain): JSX.Element {
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
            <Locations />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <Places places={[...places]} />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
