import { useEffect, useState } from 'react';
import OfferCard from './offer-card';
import { TOffersList} from './offer-list-types';
import { TOffer } from '../tconst';
import { Nullable } from 'vitest';


function OfferList({ offers }: TOffersList): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offer? : TOffer) => {
    setActiveOffer(offer || null);
  };
  // выполняется только тогда, когда обновляется компонент. Мы указали, что обновляться должен offers, поэтому обновления консоль будет запускаться, когда будет обновляться offers
  useEffect(() => {
    console.log(`активное предолжение ${activeOffer?.id}`);
  }, [offers , activeOffer]);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onHover={handleHover}
        />
      ))}
    </>
  );
}

export default OfferList;
