import { FormEventHandler, Fragment, ReactEventHandler, useState } from 'react';
import { useActionCreators } from '../../store/hooks';
import { commentsThunks } from '../../store/comments/comments-thunk';
import { useParams } from 'react-router-dom';
import { MIN_COMMENT_LENGTH } from '../const';

const rating = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

const INITIAL_FORM_STATE = {rating: 0, review: ''};

type TFeedbackChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;


function CommentForm() {

  const {id} = useParams();
  const [review, setReview] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { postComment } = useActionCreators(commentsThunks);

  const handleFeedbackChange : TFeedbackChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    setReview({...review, [name]: name === 'rating' ? Number(value) : value});
  };

  const handleFormSubmit:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!id || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    postComment({
      body: {
        comment: review.review,
        rating: review.rating },
      offerId: id,
    })
      .unwrap()
      .then(() => setReview(INITIAL_FORM_STATE))
      .catch((err) => {/* обработать ошибку */
        // эта err находится в postComment
        console.error(err);
        setReview(INITIAL_FORM_STATE);
      })
      .finally(()=> {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleFormSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {rating.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              onChange={handleFeedbackChange}
              value={value}
              checked={review.rating === value}
              id={`${value}-stars`}
              type='radio'
              disabled={isSubmitting}
            />
            <label
              htmlFor={`${value}-stars`}
              className='reviews__rating-label form__rating-label'
              title={label}
            >
              <svg className='form__star-image' width={37} height={33}>
                <use xlinkHref='#icon-star' />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        onChange={handleFeedbackChange}
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={review.review}
        disabled={isSubmitting}
      />

      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay with
          at least <b className='reviews__text-amount'>50 characters</b>.
        </p>

        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isSubmitting || review.review.length < MIN_COMMENT_LENGTH || review.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
