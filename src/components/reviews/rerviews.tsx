import { TReview } from '../tconst';
import Review from './review';

type TReviews = {
  reviews: TReview[];
}

function Reviews({reviews}: TReviews): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  );
}
export default Reviews;
