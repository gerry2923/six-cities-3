
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
