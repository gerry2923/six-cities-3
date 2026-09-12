import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';

import { offers } from './mocks/offers';
import { AutorizationStatus } from './components/const';
import { reviews } from './mocks/reviews';
import { TCity } from './components/tconst';
// import { TOffer } from './components/tconst';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const authorizationStatus = AutorizationStatus.Auth;
// const email: string = 'Oliver.conner@gmail.com';
// const favoritesCount: number = 5;
// const offers: TOffer[] = [];

// Берем все города, смотрим по ним предложения и по умолчанию ставим город, где больше всего предложений.
const cityNames = new Set(offers.map((offer) => offer.city.name));

const defaultCityName : string = Array.from(cityNames).map((cityName) => {
  let cityNumber = 0;
  offers.forEach((offer) => {
    if(cityName === offer.city.name){
      cityNumber++;
    }
  });
  return {cityName: cityName, cityNumbr: cityNumber,};
}).sort((a,b) => b.cityNumbr - a.cityNumbr)[0].cityName;

const defaultCity : TCity | undefined = offers.find((offer) => offer.city.name === defaultCityName)?.city || offers[0]?.city;

root.render(
  <React.StrictMode>
    {/* <App userEmail={email} favoritesCount={favoritesCount} places={[...offers]} /> */}
    <App offers={offers} reviews={reviews} authorizationStatus={authorizationStatus} defaultCity={defaultCity}/>
  </React.StrictMode>


);
