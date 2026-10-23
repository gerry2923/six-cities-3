import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { selectFavoritesLength } from '../../store/favorites/favorites-selectors';
import { useEffect } from 'react';
import { favoritesActions } from '../../store/favorites/favorites-slice';


function FavoritesScreen(): JSX.Element {

  const numberOfFavorites = useAppSelector(selectFavoritesLength);
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <>
      <Helmet>
        <title>
          Любимые
        </title>
      </Helmet>

      <Header />
      {
        numberOfFavorites ?
          <Favorites /> :
          <FavoritesEmpty />
      }
      <Footer />
    </>
  );
}

export default FavoritesScreen;
