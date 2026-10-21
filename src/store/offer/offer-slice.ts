import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { TOffer } from '../../components/types';
import { fetchNearBy, fetchOffer } from './offer-slice-thunk';
import { RootState } from '..';

export interface OfferState {
  info: TOffer | null;
  nearby: TOffer[];
  status: RequestStatus;
}

const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    clear(state): void {
      state.info = null;
      state.nearby = [];
      state.status = RequestStatus.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.info = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      });
  },
});

export const offerActions = {
  ...offerSlice.actions,
  fetchNearBy,
  fetchOffer,
};

export const offerSelectors = {
  nearbyOffers: (state: RootState) => state.offer.nearby,
  offer: (state: RootState) => state.offer.info,
  offerStatus: (state: RootState) => state.offer.status,
};

export default offerSlice.reducer;
