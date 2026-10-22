// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { selectAllOffers } from '../offers/offers-slice';
import { selectAuthorizationStatus } from '../user/user-slice';
import { AutorizationStatus } from '../../components/const';

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

// export const selectFavoriteIdSet = createSelector(
//   [selectFavoriteIds],
//   (favoriteIds) => new Set(favoriteIds)
// );

// Готовый список офферов с актуальным isFavorite
// на выходе список ВСЕХ предложений с измененным isFavorite
export const selectOffersWithFavorites = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id)}))
);

// Только избранные офферы — для страницы «Избранное»
export const selectFavoriteOffers = createSelector(
  [selectAllOffers, selectFavoriteIdSet],
  (offers, favoriteSet) => offers.filter((offer) => favoriteSet.has(offer.id))
);


export const favoriteSelectors = { selectFavoriteIdSet, selectFavoriteOffers };
