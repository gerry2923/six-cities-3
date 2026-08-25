import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';

import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const email: string = 'Oliver.conner@gmail.com';
const favoritesCount: number = 5;

root.render(
  <React.StrictMode>
    <App userEmail={email} favoritesCount={favoritesCount} places={[...offers]} />
  </React.StrictMode>


);
