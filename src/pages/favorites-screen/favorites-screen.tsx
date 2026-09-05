import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { TOffer } from '../../components/tconst';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import { TFavoritesByCity } from './favorites-types';


function FavoritesScreen({offers} : {offers: TOffer[]}) {
  // посчитать есть ли любимые. Если нет, то пустой экран, если есть, то отобразить
  const cityNames = new Set([...offers].map((offer) => offer.city.name));
  let favoritesCount = 0;
  const favoritesByCities: TFavoritesByCity [] = [];

  cityNames.forEach((cityName) => {
    const favoriteCities = offers.filter((offer) => offer.city.name === cityName && offer.isFavorite);

    if(favoriteCities.length !== 0) {
      favoritesByCities.push({
        city: cityName,
        favoriteOffers: favoriteCities,
      });
    }

    favoritesCount += favoriteCities.length;
  });

  return (
    <>
      <Helmet>
        <title>
          Любимые
        </title>
      </Helmet>

      <Header userEmail={'Oliver@gmail.com'} favoritesCount={favoritesCount} />
      {
        favoritesByCities.length ?
          <Favorites favorites={favoritesByCities} /> :
          <FavoritesEmpty />
      }

      <Footer />
    </>
  );
}

export default FavoritesScreen;
