import { TPlacesList} from './places-list-types';
import PlaceCard from './place-card';


function PlacesList({ places }: TPlacesList): JSX.Element {
  return (
    <>
      {places.map((place) => (
        <PlaceCard key={place.id} {...place} />
      ))}
    </>
  );
}


export default PlacesList;
