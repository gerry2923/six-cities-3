import { createSelector } from '@reduxjs/toolkit';
import { selectAllOffers } from './offers-slice';
import { selectActiveCity, selectSortType } from './city-offers-slice';
import { SortType } from '../components/const';


// выбираем все названия городв, которые нужно поставить в табы
// selectAllOffers = вернет нам все предложения, которые мы получили с сервера и они пропишутся в offers

export const selectAllCitiesNames = createSelector(
  [selectAllOffers],
  (offers) => Array.from(new Set(offers.map((offer) => offer.city.name)))
);

// возвращает массив предложений
export const selectOffersByCity = createSelector(
  [selectAllOffers, selectActiveCity],
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
