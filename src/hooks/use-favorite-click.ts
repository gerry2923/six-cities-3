import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectAuthorizationStatus } from '../store/user/user-slice';
import { AppRoute, AutorizationStatus } from '../components/const';


export function useFavoriteClick() {
  // const dispatch = useAppDispatch();
  // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  const navigate = useNavigate();
  // Returns the current Location.
  const location = useLocation();
  const status = useAppSelector(selectAuthorizationStatus);
  const isAuth = AutorizationStatus.Auth === status;

  return useCallback(
    (id: string, isFavorite: boolean) => {
      if (!isAuth) {
        navigate(AppRoute.Login, { state: { from: location } });
        return;
      }
      // dispatch(toggleFavorite({ id, isFavorite: !isFavorite }));
      console.log(`isFavorite = ${isFavorite} ${id}`);
    },
    [navigate, location, isAuth]
  );
}
