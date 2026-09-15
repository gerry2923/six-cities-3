import { useEffect, useRef } from 'react';
import { TCity, TOffer } from '../tconst';
import leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../const';

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 20],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [20, 20],
});

type TMap = {
  city: TCity;
  offers: TOffer[];
  activeOfferId?: string | null;
  className: string;
}


function Map({ city, offers, activeOfferId, className }: TMap): JSX.Element {
  // в эту ссылку запихиваем элемент - контейнер, в котором мы применяем ref (см ниже)
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<leaflet.Marker[]>([]);

  // создаем хук, который создает новый экземпляр карты
  const map = useMap(
    {
      location: city?.location ?? null,
      containerRef: mapContainerRef,
    });

  useEffect(() => {
    if (!map) {
      return undefined;
    }

    // 1) удалить старые маркеры
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // 2) создать новые и СОХРАНИТЬ их
    markersRef.current = offers.map((offer) =>
      leaflet
        .marker(
          [offer.location.latitude, offer.location.longitude],
          {
            icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          }
        )
        .addTo(map)
    );

    // 3) очистка при размонтировании/пересоздании
    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [map, offers, activeOfferId]);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );
  }, [map, city.location.latitude, city.location.longitude, city.location.zoom]);


  return (<section className={`${className} map `} ref={mapContainerRef} />);
}

export default Map;
