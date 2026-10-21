import { formatDateToMonthYear } from '../../utils/date';
import { TComment } from '../types';

function Comment({ comment }: { comment: TComment }): JSX.Element {

  const rating = `${(comment.rating * 100 / 5).toString()}%`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {formatDateToMonthYear(comment.date)}
        </time>
      </div>
    </li>
  );
}

export default Comment;
