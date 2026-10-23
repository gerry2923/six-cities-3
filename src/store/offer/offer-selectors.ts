import { createSelector } from '@reduxjs/toolkit';
import { selectFavoriteIdSet } from '../favorites/favorites-selectors';
import { offerSelectors } from './offer-slice';


// Оффер с актуальным isFavorite
export const selectOfferWithFavorites = createSelector(
  [offerSelectors.offer, selectFavoriteIdSet],
  (offer, favoriteSet) =>
    offer ? { ...offer, isFavorite: favoriteSet.has(offer.id) } : null
);

// nearby с актуальным isFavorite
export const selectNearbyOffersWithFavorites = createSelector(
  [offerSelectors.nearbyOffers, selectFavoriteIdSet],
  (offers, favoriteSet) =>
    offers.map((offer) => ({ ...offer, isFavorite: favoriteSet.has(offer.id) }))
);
