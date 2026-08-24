import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app';
import { offers } from './mocks/offers';
// import { TPlaces } from './components/places/places-list-types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const email:string = 'Oliver.conner@gmail.com';
const favoritesCount: number = 5;

let count = 0;
[...offers].forEach((element) => {
  console.log(element.id);
  count++;
});

console.log(count);

root.render(
  <React.StrictMode>
    <App userEmail={email} favoritesCount={favoritesCount} places={[...offers]}/>
  </React.StrictMode>
);
