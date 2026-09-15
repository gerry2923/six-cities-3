import { TOffers} from '../../components/offer/offer-list-types';
import { TCity } from '../../components/tconst';

type TMain = {
  userEmail: string;
  favoritesCount: number;
  defaultCity: TCity;
  places: TOffers;
}


export default TMain;
