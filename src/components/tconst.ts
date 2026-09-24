import { SortType } from './const';

export type TUrl = string;

export type TUser = {
  name: string;
  avatarUrl: TUrl;
  isPro: boolean;
};

export type TReview = {
  id: string;
  offerId: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type TReviews = TReview[];

export type THost = {
  name: string;
  avatarUrl: TUrl;
  isPro: boolean;
}
export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
};

export type OfferType = 'apartment' | 'house' | 'room' | 'hotel';

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

export type TSortType = typeof SortType[keyof typeof SortType];
