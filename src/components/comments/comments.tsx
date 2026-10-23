import { MAX_COMMENTS } from '../const';
import { TComment } from '../types';
import Comment from './comment';

type TComments = {
  comments: TComment[];
}


function Comments({comments}: TComments): JSX.Element {
  const visibleComments = comments.slice(0, MAX_COMMENTS);

  return (
    <ul className="comments__list">
      {visibleComments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ul>
  );
}
export default Comments;
