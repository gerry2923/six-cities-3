
export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const publicUrl = import .meta.env.BASE_URL;

export const DEFAULT_CITY_NAME = 'Paris';

export const URL_MARKER_DEFAULT = `${publicUrl}img/pin.svg`;
export const URL_MARKER_ACTIVE = `${publicUrl}img/pin-active.svg`;

export const SortType = {
  Popular: 'popular',
  PriceLowToHigh: 'price-low-to-high',
  PriceHighToLow: 'price-high-to-low',
  TopRated: 'top-rated',
} as const;
