
export type TUrl = string;

export type TUser = {
  name: string;
  avatarUrl: TUrl;
  isPro: boolean;
};

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type TReviews = TReview[];

type THost = {
  name: string;
  avatarUrl: TUrl;
  isPro: boolean;
}
type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type TCity = {
  name: string;
  location: TLocation;
};

type OfferType = 'apartment' | 'house' | 'room' | 'hotel';

export type TOffer = {
  id: string;
  title: string;
  // type: 'apartment' | 'house' | 'room' | 'hotel';
  type: OfferType;
  price: number;
  previewImage: TUrl;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: null | string[];
  host: THost;
  images: null | string[];
  maxAdults: number;
};
