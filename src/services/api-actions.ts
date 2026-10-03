import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { setOffers } from '../store/offers-slice';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../components/const';
import { TOffer } from '../components/tconst';


export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffers(data));
  },
);
