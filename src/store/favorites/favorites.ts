import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { TOffer } from '../../components/types';

export interface FavoritesState {
  favorites: TOffer[];
  status: RequestStatus;
}

export const initialState : FavoritesState = {
  favorites: [],
  status: RequestStatus.Idle,
};


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase();
  },
});
