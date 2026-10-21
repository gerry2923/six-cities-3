import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { TComment, TComments } from '../../components/types';
import { commentsThunks } from './comments-thunk';
import { RootState } from '..';

export interface CommentsState {
  items: TComments;
  requestStatus: RequestStatus;
}

const initialState: CommentsState = {
  items: [],
  requestStatus: RequestStatus.Idle,
};

function processLoading(state: CommentsState){
  state.requestStatus = RequestStatus.Loading;
}

function processFailed(state: CommentsState){
  state.requestStatus = RequestStatus.Failed;
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
  extraReducers: (builder) =>{
    builder
      .addCase(commentsThunks.fetchCommets.fulfilled, processSuccess)
      .addCase(commentsThunks.fetchCommets.pending, processLoading)
      .addCase(commentsThunks.fetchCommets.rejected, processFailed)

      .addCase(commentsThunks.postComment.pending, processLoading)
      .addCase(commentsThunks.postComment.fulfilled, (state: CommentsState, action: PayloadAction<TComment>) => {
        state.requestStatus = RequestStatus.Success;
        state.items.push(action.payload);
      })
      .addCase(commentsThunks.postComment.rejected, processFailed);
  },
});

export const commentsActions = {
  ...commentsSlice.actions,
  ...commentsThunks
};

export const selectComments = (state: RootState) => state.comments.items;
export const selectCommentsRequestStatus = (state: RootState) => state.comments.requestStatus;

export default commentsSlice.reducer;
