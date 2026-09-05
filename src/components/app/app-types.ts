import { AutorizationStatus } from '../const';
import { TOffer, TReview } from '../tconst';

type TApp = {
  authorizationStatus: AutorizationStatus;
  offers: TOffer[];
  reviews: TReview[];
}


export default TApp;
