// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { selectAllOffers } from '../offers/offers-slice';
import { selectAuthorizationStatus } from '../user/user-slice';
import { AutorizationStatus } from '../../components/const';
import { ALL_CITIES_NAMES } from '../../components/const';
import { TOffer } from '../../components/types';

export const selectFavoriteIds = (state: RootState) => state.favorites.favoriteIds;
export const selectFavoritesStatus = (state: RootState) => state.favorites.status;
export const selectFavoritePendingIds = (state: RootState) => state.favorites.pendingIds;


// если пользователь НЕ авторизован, то список с id обнуляется
export const selectEffectiveFavoriteIds = createSelector(
  [selectFavoriteIds, selectAuthorizationStatus],
  (favoriteIds, status) =>
    status === AutorizationStatus.Auth ? favoriteIds : []
);

// Множество для O(1)-проверки
export const selectFavoriteIdSet = createSelector(
  [selectEffectiveFavoriteIds],
  (favoriteIds) => new Set(favoriteIds)
);

export const selectFavoritesLength = createSelector(
  [selectFavoriteIds],
  (favoriteIds) => favoriteIds.length
);

// Готовый список офферов с актуальным isFavorite
// на выходе список ВСЕХ предложений с измененным isFavorite
export const selectOffersWithFavorites = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id) }))
);

// Только избранные офферы — для страницы «Избранное»
export const selectFavoriteOffers = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) => offers.filter((offer) => favoriteSet.has(offer.id))
);

export const selectFavoritesByCityName = createSelector(
  [selectFavoriteOffers],
  (offers) => {
    // console.log(offers);
    const favoriteOffersByCity = new Map<string, TOffer[]>();
    for (const offer of offers) {
      // списку присваиваем значение города, которое есть в данном предложении
      // list - cписок всех офферов, которые соответствуют городу
      // Если по ключу города есть массив с предложениями, то возвращается он, если такого ключа нет, то вернется undefined
      const list = favoriteOffersByCity.get(offer.city.name);
      // если город есть, то в его массив закидываем оффер
      if (list) {
        list.push(offer);
        // если города нет, то назначаем новый город и создаем ему массив с проверяемым оффером
      } else {
        favoriteOffersByCity.set(offer.city.name, [offer]);
      }
    }

    return ALL_CITIES_NAMES
      .filter((name) => favoriteOffersByCity.has(name))
      .map((cityName) => ({ cityName, cityOffers: favoriteOffersByCity.get(cityName)! }));
  }
);


export const favoriteSelectors = { selectFavoriteIdSet, selectFavoriteOffers };
