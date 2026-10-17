import { TComment, TComments, TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';

export interface TCommentInfo {
  body: {
    comment: string;
    rating: number;
  };
  offerId: TOffer['id'];

}

// fetchComents
const fetchCommets = createAppAsyncThunk<TComments, string>({

});

const postComment = createAppAsyncThunk<TComment, TCommentInfo>();
