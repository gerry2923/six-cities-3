import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutorizationStatus, RequestStatus } from '../../components/const';
import { RootState } from '..';
import { TUser } from '../../components/tconst';
import { checkAuth } from './user-thunk';


export interface UserState {
  user: TUser | null;
  authorizationStatus: AutorizationStatus;
  requestStatus: RequestStatus;
  // error: string | null;
}

const initialState: UserState = {
  user: null,
  authorizationStatus: AutorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
  // error: null,
};

function processLoading(state: UserState){
  state.requestStatus = RequestStatus.Loading;
}

function processFailed(state: UserState){
  state.requestStatus = RequestStatus.Failed;
  state.authorizationStatus = AutorizationStatus.NoAuth;

}

function processSuccess(state: UserState, action:PayloadAction<TUser>){
  state.requestStatus = RequestStatus.Success;
  state.user = action.payload;
  state.authorizationStatus = AutorizationStatus.Auth;
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setStatus(state, action: PayloadAction<AutorizationStatus>): void {
      state.authorizationStatus = action.payload;
    },

    setUser(state, action: PayloadAction<TUser>): void {
      state.user = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.pending, processLoading)
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)
      .addCase(login.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)
      .addCase(logout.pending, processLoading)
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AutorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.authorizationStatus = AutorizationStatus.NoAuth;
        state.user = null;
      });
  }

});

// export const { setStatus, setUser } = userSlice.actions;
export const userActions = {...userSlice.actions, checkAuth, login, logout};
export const selectAuthorizationStatus = (state: RootState) => state.user.authorizationStatus;
export const selectUser = (state: RootState) => state.user.user;
export const selectRequestStatus = (state: RootState) => state.user.requestStatus;
export default userSlice.reducer;
