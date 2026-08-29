import { AutorizationStatus } from '../const';
import { TOffer } from '../tconst';

type TApp = {
  authorizationStatus: AutorizationStatus;
  offers: TOffer[];
}


export default TApp;
