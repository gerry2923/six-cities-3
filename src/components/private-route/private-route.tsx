import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/user/user-slice';
import { AppRoute } from '../const';
import { Navigate, useLocation, Location } from 'react-router-dom';

type TPrivateRoute = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
};

type FromState = {
  from?: Location;
}

function PrivateRoute({ children, onlyUnAuth = false }: TPrivateRoute) {
  // объект, который описывает текущий url. у него есть несклько полей
  // сохраняет знчение только в текущей вкладке
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const user = useAppSelector(selectUser);

  if(onlyUnAuth && user) {
    const from = location.state?.from || {pathname: AppRoute.Main};
    return <Navigate to={from} />;
  }

  if(!onlyUnAuth && !user) {
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }


  return children;
  // return (
  //   authorizationStatus === AutorizationStatus.Auth ?
  //     children :
  //     <Navigate to={AppRoute.Login} />
  // );
}

export default PrivateRoute;
