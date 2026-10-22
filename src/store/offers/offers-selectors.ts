import { createSelector } from '@reduxjs/toolkit';
import { selectActiveCity, selectSortType } from '../ui/ui-slice';
import { SortType } from '../../components/const';
import { selectOffersWithFavorites } from '../favorites/favorites-selectors';


// возвращает массив предложений
// export const selectOffersByCity = createSelector(
//   [selectAllOffers, selectActiveCity],
//   (offers, city) => offers.filter((offer) => offer.city.name === city)
// );

export const selectOffersByCity = createSelector(
  [selectOffersWithFavorites, selectActiveCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

// возвращает объект TCity для карты
export const selectActiveCityLocation = createSelector(
  [selectOffersByCity],
  (offers) => offers[0]?.city
);


export const selectSortedOffers = createSelector(
  [selectOffersByCity, selectSortType],
  (offers, sortType) => {
    const filteredOffers = [...offers];
    switch (sortType) {
      case SortType.PriceLowToHigh:
        return filteredOffers.sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow:
        return filteredOffers.sort((a, b) => b.price - a.price);
      case SortType.TopRated:
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
  }
);


export const selectSortedOffersLength = createSelector([selectSortedOffers],
  (offers) => offers.length
);
