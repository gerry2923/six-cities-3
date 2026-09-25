import { AutorizationStatus } from '../const';
import { TOffer, TReview } from '../tconst';

type TApp = {
  // defaultCity: TCity;
  authorizationStatus: AutorizationStatus;
  offers: TOffer[];
  // allCities: string[];
  reviews: TReview[];
}


export default TApp;
