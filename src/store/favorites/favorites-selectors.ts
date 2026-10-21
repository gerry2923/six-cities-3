// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export const selectFavoriteIds = (state: RootState) => state.favorites.favoriteIds;
export const selectFavoritesStatus = (state: RootState) => state.favorites.status;
export const selectFavoritePendingIds = (state: RootState) => state.favorites.pendingIds;

// Множество для O(1)-проверки
export const selectFavoriteIdSet = createSelector(
  [selectFavoriteIds],
  (ids) => new Set(ids)
);

// Готовый список офферов с актуальным isFavorite
export const selectOffersWithFavorites = createSelector(
  [(state: RootState) => state.offers.offers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((o) => ({ ...o, isFavorite: favoriteSet.has(o.id) }))
);

// Только избранные офферы — для страницы «Избранное»
export const selectFavoriteOffers = createSelector(
  [(state: RootState) => state.offers.offers, selectFavoriteIdSet],
  (offers, favoriteSet) => offers.filter((o) => favoriteSet.has(o.id))
);

export const favoriteSelectors = { selectFavoriteIdSet, selectFavoriteOffers };
