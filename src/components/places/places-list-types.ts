type TPlacesList = {
  places: TPlaces;
};

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type TCity = {
  name: string;
  location: TLocation;
};

type TUrlImage = string;

type TPlaceCard = {
  id: string;
  title: string;
  // type: 'apartment' | 'house' | 'room' | 'hotel';
  type: string;
  price: number;
  previewImage: TUrlImage;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type TPlaces = TPlaceCard[] ;

export type {TPlacesList, TPlaceCard, TPlaces};
