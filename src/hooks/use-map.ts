import { useEffect, useRef } from 'react';
import leaflet, { Map as LeafletMap } from 'leaflet';

type TUseMap = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  containerRef: React.RefObject<HTMLElement | null>;
};

const TILE_LAYER_URL_PATTERN = 'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function useMap({ location, containerRef }: TUseMap): LeafletMap | null {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current){
      return;
    }

    // Если карта уже создана, просто обновляем центр и zoom
    if (mapRef.current) {
      mapRef.current.setView(
        [location.latitude, location.longitude],
        location.zoom
      );
      return;
    }

    // Создаём карту в первый раз
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

    mapRef.current = instance;

    // Очистка при размонтировании
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [location.latitude, location.longitude, location.zoom, containerRef]);

  return mapRef.current;
}

export default useMap;
