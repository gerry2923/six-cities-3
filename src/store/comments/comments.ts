import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { TComments } from '../../components/types';

export interface CommentsState {
  items: TComments;
  status: RequestStatus;
}

const initialState: CommentsState = {
  items: [],
  status: RequestStatus.Idle,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(commentsThunks.fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
  },
  selectors: {},
});

export const commentsActions = {
  ...commentsSlice.actions,
  ...commentsThunks
};
