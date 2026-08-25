import { AutorizationStatus, AppRoute } from '../const';
import { Navigate } from 'react-router-dom';

type TPrivateRoute = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props : TPrivateRoute){

  const {autorizationStatus, children} = props;

  return (
    autorizationStatus === AutorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
