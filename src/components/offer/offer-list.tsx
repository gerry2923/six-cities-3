// import { useEffect, useState } from 'react';
import OfferCard from './offer-card';
import { TOffersList} from './offer-list-types';
// import { TOffer } from '../tconst';
// import { Nullable } from 'vitest';


function OfferList({ offers, onActiveOfferChange }: TOffersList): JSX.Element {


  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={onActiveOfferChange}
        />
      ))}
    </>
  );
}

export default OfferList;
