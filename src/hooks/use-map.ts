import { useEffect, useRef, useState } from 'react';
import leaflet, { Map as LeafletMap } from 'leaflet';

type TUseMap = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  containerRef: React.RefObject<HTMLElement | null>;
};

const TILE_LAYER_URL_PATTERN = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function useMap({ location, containerRef }: TUseMap): LeafletMap | null {
  const isRenderedRef = useRef(false);
  const [map, setMap] = useState<LeafletMap | null>(null);

  useEffect(() : void => {

    if(containerRef.current !== null && !isRenderedRef.current) {
      // указываем внутри какого элемента находится карта и создаем ее центр
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;

    }

  }, [location.latitude, location.longitude, location.zoom, containerRef]);

  return map;
}

export default useMap;
