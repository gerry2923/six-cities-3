import Header from '../../components/header/header';
import LocationNavigation from '../../components/location-navigation/location-navigation';


import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../store/hooks';
import { selectActiveCity} from '../../store/ui/ui-slice';

import { MainList } from './main-list';
import { MainEmpty } from './main-empty';
import { selectOffersLoading } from '../../store/offers/offers-slice';
import { selectSortedOffersLength } from '../../store/offers/offers-selectors';

// TODO: добавить обработку ошибок (нет загрузки, нет предложений)
// TODO: если нет предложений в списке, вывести No Places To stay available

function MainScreen(): JSX.Element {

  const activeCity = useAppSelector(selectActiveCity); // для принятия cityName/string
  const isLoading = useAppSelector(selectOffersLoading);
  const sortedOffersLength = useAppSelector(selectSortedOffersLength); // для принятия number


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Основной экран</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${sortedOffersLength === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationNavigation />

          </section>
        </div>
        <div className="cities">
          {
            (sortedOffersLength === 0 && !isLoading) ?
              <MainEmpty activeCityName={activeCity}/> :
              <MainList />
          }
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
