import { useEffect, useState } from 'react';
import OfferCard from './offer-card';
import { TOffersList} from './offer-list-types';
import { TOffer } from '../tconst';
import { Nullable } from 'vitest';


function OfferList({ offers, onActiveOfferChange }: TOffersList): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  
  // тут ставим активный оффер ->  его надо передать в main screen чтобы обновить карту
  const handleHover = (offer? : TOffer) => {
    setActiveOffer(offer || null);
    onActiveOfferChange(offer || null);
  };


  // выполняется только тогда, когда обновляется компонент. Мы указали, что обновляться должен offers, поэтому обновления консоль будет запускаться, когда будет обновляться offers \
  // тут нет необходимости в useEffect!!!!! 
  useEffect(() => {
    console.log(`активное предолжение ${activeOffer?.id}`);
    // TODO: применить стили к карте предложения
  }, [offers , activeOffer]);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={handleHover}
        />
      ))}
    </>
  );
}

export default OfferList;
