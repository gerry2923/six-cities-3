import Login from '../../pages/login-screen/login';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites-screen/favorites-screen';
import NotFound from '../not-found/notFound';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';

import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppSelector,} from '../../store/hooks';
import { selectAuthorizationStatus } from '../../store/user/user-slice';


function App(): JSX.Element {

  /*  // Добавляем загрузку данных с сервера
  // const dispatch = useAppDispatch();
  // const offers = useAppSelector(selectAllOffers);
  // const isLoading = useAppSelector(selectIsLoading);

  // const { fetchAllOffers } = useActionCreators(offersActions);

  // useEffect(() => {
  //   fetchAllOffers()
  //     .unwrap()
  //     .then(() => {
  //       console.log('sucsess');
  //     })
  //     .catch(() => {
  //       console.log('Error');
  //     });
  // });

  // if (isLoading) {
  //   return <Spinner />;
  // }
*/
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route path={AppRoute.Main} element={<MainScreen />}/>
          <Route path={AppRoute.Login} element={<Login />} />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer} element={<OfferScreen />}/>
          <Route path='*' element={<NotFound type={'page'}/>} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
