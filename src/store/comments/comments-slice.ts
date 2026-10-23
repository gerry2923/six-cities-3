import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { TComment, TComments } from '../../components/types';
import { commentsThunks } from './comments-thunk';
import { RootState } from '..';

export interface CommentsState {
  items: TComments;
  requestStatus: RequestStatus;
  error: string;
}

const initialState: CommentsState = {
  items: [],
  requestStatus: RequestStatus.Idle,
  error: '',
};

function processLoading(state: CommentsState){
  state.requestStatus = RequestStatus.Loading;
}

function processFailed(state: CommentsState){
  state.requestStatus = RequestStatus.Failed;
  state.error = 'ошибка загрузки';
}

function processSuccess(state: CommentsState, action:PayloadAction<TComments>){
  state.requestStatus = RequestStatus.Success;
  state.items = action.payload;
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments: (state: CommentsState) => {
      state.items = [];
      state.requestStatus = RequestStatus.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(commentsThunks.fetchComments.fulfilled, processSuccess)
      .addCase(commentsThunks.fetchComments.pending, processLoading)
      .addCase(commentsThunks.fetchComments.rejected, processFailed)

      .addCase(commentsThunks.postComment.fulfilled, (state: CommentsState, action: PayloadAction<TComment>) => {
        state.items.push(action.payload);
      })
      .addCase(commentsThunks.postComment.rejected, (state: CommentsState) => {
        state.error = 'ошибка отправки';
      });
  },
});

export const commentsActions = {
  ...commentsSlice.actions,
  ...commentsThunks
};

export const selectComments = (state: RootState) => state.comments.items;
export const selectCommentsRequestStatus = (state: RootState) => state.comments.requestStatus;

export default commentsSlice.reducer;
