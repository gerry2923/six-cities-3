import { AutorizationStatus, AppRoute } from '../const';
import { Navigate } from 'react-router-dom';

type TPrivateRoute = {
  authorizationStatus: AutorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props : TPrivateRoute){

  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AutorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
