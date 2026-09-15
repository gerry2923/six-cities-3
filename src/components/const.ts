
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

export const URL_MARKER_DEFAULT = `${publicUrl}img/pin.svg`;
export const URL_MARKER_ACTIVE = `${publicUrl}img/pin-active.svg`;
