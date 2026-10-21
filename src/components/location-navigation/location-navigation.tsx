import { uiActions, selectActiveCity} from '../../store/ui/ui-slice';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { ALL_CITIES_NAMES, SortType } from '../const';
import { TLocation } from './location-navigation-types';

function Location({
  activeCity,
  cityName,
  onLocationClick
}: TLocation): JSX.Element {

  const handleClick = (evt: React.PointerEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const city = evt.currentTarget.dataset.city;
    if (city) {
      onLocationClick(city);
    }
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          activeCity === cityName ? 'tabs__item--active' : ''
        }`}
        href="#"
        data-city={cityName}
        onPointerDown={handleClick}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

// function LocationNavigation({
//   activeCity,
//   cityNames,
//   onLocationClick
// }: TLocationNavigation): JSX.Element {

function LocationNavigation(): JSX.Element {

  // const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const cityNames = ALL_CITIES_NAMES;
  const {setActiveCity, setSortType, setActiveOfferId} = useActionCreators(uiActions);
  const activeCity = useAppSelector(selectActiveCity);

  // нажатие на таб с городом
  const handleCityChange = (cityName: string): void => {
    if (!cityName) {
      return;
    }
    // установили новое значение города
    setActiveCity(cityName);
    // обнулили сортировку
    setSortType(SortType.Popular);
    // обнулили выделенную мышкой карточку предложенжия
    setActiveOfferId(null);

  };

  // const handleLocationClick = (cityName: string): void =>{
  //   onLocationClick(cityName);
  // };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => (
        <Location
          key={cityName}
          activeCity={activeCity}
          cityName={cityName}
          onLocationClick={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default LocationNavigation;
