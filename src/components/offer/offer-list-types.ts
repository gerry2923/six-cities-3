import { TOffer } from '../tconst';

type TOffersList = {
  offers: TOffers;
  onActiveOfferChange: (offer?: TOffer | null) => void;
};

type TOffers = TOffer[] ;

export type {TOffersList, TOffers};
