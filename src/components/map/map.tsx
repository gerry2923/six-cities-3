import { useEffect, useRef } from 'react';
import { TCity, TOffer } from '../tconst';
import leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../const';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

type TMap = {
  city: TCity;
  offers: TOffer[];
  activeOfferId?: string | null;
}


function Map ({city, offers, activeOfferId} : TMap): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // создаем хук, который создает новый экземпляр карты
  const map = useMap(
    {
      location: city?.location ?? null,
      containerRef: mapContainerRef,
    });

  useEffect((): void => {
    if(map) {
      offers.map((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          }).addTo(map);
      });
    }
  }, [activeOfferId, offers, map]);


  return (<section className="cities__map map" ref={mapContainerRef}/>);
}

export default Map;
