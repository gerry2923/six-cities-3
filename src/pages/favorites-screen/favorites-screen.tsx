import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { TOffer } from '../../components/types';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites/favorites-empty';
import { TFavoritesByCity } from './favorites-types';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/user/user-slice';


function FavoritesScreen():JSX.Element {
  //если нет ничего в favorites, то возвращаю экран favorEmpty, а если есть, то другой экран


  console.log('favorites');

  const user = useAppSelector(selectUser);
  console.log(`${user?.name} ${user?.email} ${user?.avatarUrl} ${user?.isPro} ${user?.token}`);
  // посчитать есть ли любимые. Если нет, то пустой экран, если есть, то отобразить
  // const cityNames = new Set([...offers].map((offer) => offer.city.name));
  // let favoritesCount = 0;
  // const favoritesByCities: TFavoritesByCity [] = [];

  // cityNames.forEach((cityName) => {
  //   const favoriteCities = offers.filter((offer) => offer.city.name === cityName && offer.isFavorite);

  //   if(favoriteCities.length !== 0) {
  //     favoritesByCities.push({
  //       city: cityName,
  //       favoriteOffers: favoriteCities,
  //     });
  //   }

  //   favoritesCount += favoriteCities.length;
  // });

  return (
    <>
      <Helmet>
        <title>
          Любимые
        </title>
      </Helmet>

      <Header />
      {
        // favoritesByCities.length ?
        //   <Favorites favorites={favoritesByCities} /> :
        //   <FavoritesEmpty />
      }
      <FavoritesEmpty />
      <Footer />
    </>
  );
}

export default FavoritesScreen;
