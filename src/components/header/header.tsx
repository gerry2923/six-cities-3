// import type THeader from '../header/header-types';
import { Link, useLocation } from 'react-router-dom';
import { useActionCreators, useAppSelector, useAuth } from '../../store/hooks';
import Logo from '../logo/logo';
import { AppRoute } from '../const';
import { selectUser, userActions } from '../../store/user/user-slice';
import { useEffect } from 'react';
import { favoritesActions } from '../../store/favorites/favorites-slice';
import { useSelector } from 'react-redux';
import { selectFavoritesLength } from '../../store/favorites/favorites-selectors';

function LoggedNav(): JSX.Element {
  const { fetchFavorites } = useActionCreators(favoritesActions);
  const { logout } = useActionCreators(userActions);

  const user = useAppSelector(selectUser);
  const isAuth = useAuth();
  const numberOfFavorites = useSelector(selectFavoritesLength);

  useEffect(() => {
    if (isAuth) {
      fetchFavorites();
    }
  }, [isAuth, fetchFavorites]);

  // TODO: добавить подстчет избранного --> нужны все офферы с пользователем
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            {user?.email}
          </span>
          <span className="header__favorite-count">{numberOfFavorites}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={() => {
            logout();
          }}
          // to={AppRoute.Login}
          to=""
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

function NotLoggedNav(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

function Navigation(): JSX.Element {
  const isAuthorized = useAuth();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorized ? <LoggedNav /> : <NotLoggedNav />}
      </ul>
    </nav>
  );
}

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const isLoginScreen = pathname === AppRoute.Login as string;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left">
            <Logo />
          </div>

          {isLoginScreen ? '' : <Navigation />}

        </div>
      </div>
    </header>
  );
}

export default Header;
