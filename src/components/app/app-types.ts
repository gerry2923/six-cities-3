import { AutorizationStatus } from '../const';
import { TCity, TOffer, TReview } from '../tconst';

type TApp = {
  defaultCity: TCity;
  authorizationStatus: AutorizationStatus;
  offers: TOffer[];
  reviews: TReview[];
}


export default TApp;
