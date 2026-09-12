import { TLocation, TLocationNavigation } from './location-navigation-types';

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

function LocationNavigation({
  activeCity,
  cityNames,
  onLocationClick
}: TLocationNavigation): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => (
        <Location
          key={cityName}
          activeCity={activeCity}
          cityName={cityName}
          onLocationClick={onLocationClick}
        />
      ))}
    </ul>
  );
}

export default LocationNavigation;
