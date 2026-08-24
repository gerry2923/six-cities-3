import MainScreen from '../../pages/main-screen/main-screen';
import TApp from './app-types';


function App ({
  userEmail,
  favoritesCount,
  places,
} : TApp):JSX.Element {

  return <MainScreen userEmail={userEmail} favoritesCount={favoritesCount} places={places}/>;
}

export default App;
