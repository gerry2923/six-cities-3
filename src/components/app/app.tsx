
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
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchOfferAction } from '../../services/api-actions';
import { selectAllOffers, selectIsLoading } from '../../store/offers-slice';


function App({
  authorizationStatus,
  // offers,
  // allCities,
  reviews,
}: TApp): JSX.Element {

  // Добавляем загрузку данных с сервера
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectAllOffers);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchOfferAction);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route path={AppRoute.Main}
            element={
              <MainScreen
                userEmail={'Oliver@gmail.com'}
                favoritesCount={8}
                // allCities={allCities}
                // defaultCity={defaultCity}
                // places={offers}
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

          <Route path='*' element={<NotFound type={'page'}/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
