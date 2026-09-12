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

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_ACTIVE = '../img/pin-acitve.svg';
