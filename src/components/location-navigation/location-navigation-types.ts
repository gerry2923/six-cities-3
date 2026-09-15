export type TLocationNavigation = {
  activeCity: string;
  cityNames: string[];
  onLocationClick: (cityName: string) => void;
};


export type TLocation = {
  activeCity: string;
  cityName: string;
  // onLocationClick: (evt: React.PointerEvent<HTMLAnchorElement>) => void;
  onLocationClick: (cityName: string) => void;
};
