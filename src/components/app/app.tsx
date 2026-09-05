
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import Login from '../../pages/login-screen/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import NotFound from '../not-found/notFound';
import MainScreen from '../../pages/main-screen/main-screen';
import TApp from './app-types';
import OfferScreen from '../../pages/offer-screen/offer-screen';


function App({
  offers,
  reviews,
  authorizationStatus
}: TApp): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <MainScreen
                userEmail={'Oliver@gmail.com'}
                favoritesCount={8}
                places={offers}
              />
            }
          />
          <Route path={AppRoute.Login}
            element={<Login />}
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute autorizationStatus={authorizationStatus}>
                <Favorites offers={offers}/>
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer}
            element={<OfferScreen offers={offers} reviews={reviews} autorizationStatus={authorizationStatus}/>}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
