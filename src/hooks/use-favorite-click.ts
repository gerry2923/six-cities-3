import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAuthorizationStatus } from '../store/user/user-slice';
import { AppRoute, AutorizationStatus } from '../components/const';
import { changeFavoriteStatus } from '../store/favorites/favorites-thunk';


export function useFavoriteClick() {
  const dispatch = useAppDispatch();
  // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  const navigate = useNavigate();
  // Returns the current Location.
  const location = useLocation();
  const status = useAppSelector(selectAuthorizationStatus);
  const isAuth = AutorizationStatus.Auth === status;
  // const { changeFavoriteStatus } = useActionCreators(favoritesActions);

  return useCallback(
    (id: string, isFavorite: boolean) => {
      if (!isAuth) {
        navigate(AppRoute.Login, { state: { from: location } });
        return;
      }
      dispatch(changeFavoriteStatus({ offerId: id, isFavorite: isFavorite }));
      // console.log(`isFavorite = ${isFavorite} ${id}`);
      // changeFavoriteStatus({offerId: id, isFavorite: isFavorite});
    },
    [dispatch, navigate, location, isAuth]
  );
}
