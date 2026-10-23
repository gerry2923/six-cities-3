import { AppRoute } from '../../components/const';
import { TComment, TComments, TOffer } from '../../components/types';
import { getToken } from '../../services/token';
import { createAppAsyncThunk } from '../create-thunk';

export interface TCommentInfo {
  body: {
    comment: string;
    rating: number;
  };
  offerId: TOffer['id'];

}

const fetchComments = createAppAsyncThunk<TComments, string>(
  'comments/fetchComments',
  async (offerId, {extra: api}) => {

    const { data } = await api.get<TComments>(`${AppRoute.Comments}/${offerId}`);
    return data;
  }
);

const postComment = createAppAsyncThunk<TComment, TCommentInfo>(
  'comments/postComment',
  async ({ offerId, body }, { extra: api, rejectWithValue }) => {

    const token = getToken();
    try {
      const { data } = await api.post<TComment>(
        `${AppRoute.Comments}/${offerId}`,
        body,
        {
          headers: {
            'X-Token': token || '',
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue('не удалось отправить комментарий!!**!!');
    }

  }
);


export const commentsThunks = {fetchComments, postComment};
