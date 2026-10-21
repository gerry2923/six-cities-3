import { TComment } from '../types';
import Comment from './comment';

type TComments = {
  comments: TComment[];
}

function Comments({comments}: TComments): JSX.Element {
  return (
    <ul className="comments__list">
      {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ul>
  );
}
export default Comments;
