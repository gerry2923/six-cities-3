import { TOffer } from '../types';

type TOffersList = {
  offers: TOffers;
  onActiveOfferChange: (offer: TOffer | null) => void;
};

type TOffers = TOffer[] ;

export type {TOffersList, TOffers};
