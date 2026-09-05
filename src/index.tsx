import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';

import { offers } from './mocks/offers';
import { AutorizationStatus } from './components/const';
import { reviews } from './mocks/reviews';
// import { TOffer } from './components/tconst';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const authorizationStatus = AutorizationStatus.Auth;
// const email: string = 'Oliver.conner@gmail.com';
// const favoritesCount: number = 5;
// const offers: TOffer[] = [];

root.render(
  <React.StrictMode>
    {/* <App userEmail={email} favoritesCount={favoritesCount} places={[...offers]} /> */}
    <App offers={offers} reviews={reviews} authorizationStatus={authorizationStatus} />
  </React.StrictMode>


);
