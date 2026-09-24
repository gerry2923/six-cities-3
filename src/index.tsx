import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';

import { offers } from './mocks/offers'; // все предложения по всем городам, т.е. то, что хранит store
import { AutorizationStatus } from './components/const';
import { reviews } from './mocks/reviews';
// import { TCity } from './components/tconst';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { TOffer } from './components/tconst';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const authorizationStatus = AutorizationStatus.Auth;
// TODO: изменить получение списка всех городов allCities, когда подключится асинхрон


root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App userEmail={email} favoritesCount={favoritesCount} places={[...offers]} /> */}
      <App
        offers={offers}
        reviews={reviews}
        allCities={Array.from(new Set(offers.map((offer) => offer.city.name)))}
        authorizationStatus={authorizationStatus}
      />
    </Provider>

  </React.StrictMode>


);
