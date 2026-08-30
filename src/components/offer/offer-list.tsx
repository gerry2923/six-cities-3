import OfferCard from './offer-card';
import { TOffersList} from './offer-list-types';


function OfferList({ offers }: TOffersList): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </>
  );
}

export default OfferList;
