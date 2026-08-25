
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../const';
import Login from '../../pages/login-screen/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites-screen/favorites';
import Offer from '../../pages/offer-screen/offer';
import NotFound from '../not-found/notFound';
import MainScreen from '../../pages/main-screen/main-screen';
import TApp from './app-types';


function App({
  userEmail,
  favoritesCount,
  places,
}: TApp): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <MainScreen
                userEmail={userEmail}
                favoritesCount={favoritesCount}
                places={places}
              />
            }
          />
          <Route path={AppRoute.Login}
            element={<Login />}
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute autorizationStatus={AutorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer}
            element={<Offer />}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
