import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { OfferId } from '../../components/types';
import { changeFavoriteStatus, favoritesThunks, fetchFavorites} from './favorites-thunk';
import { logout } from '../user/user-thunk';

// будем сохранять не целый массив предложений, а только их id
export interface FavoritesState {
  favoriteIds: OfferId[];
  status: RequestStatus;
  error: string | null;
  // чтобы блокировать кнопку, пока летит мутация
  pendingIds: Record<OfferId, true>;
}

export const initialState: FavoritesState = {
  favoriteIds: [],
  status: RequestStatus.Idle,
  error: null,
  pendingIds: {},
};


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoritesCleared: (state) => {
      state.favoriteIds = [];
      state.status = RequestStatus.Idle;
      state.error = null;
      state.pendingIds = {};
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state: FavoritesState) => {
        state.status = RequestStatus.Loading;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state: FavoritesState, action: PayloadAction<OfferId[]>) => {
        state.favoriteIds = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState,) => {
        state.status = RequestStatus.Failed;
        // state.error = action.payload ?? 'Ошибочка';
      })

      .addCase(changeFavoriteStatus.pending, (state: FavoritesState, action) => {
        // это нужно, чтобы заблокировать кнопку
        state.pendingIds[action.meta.arg.offerId] = true;

      })

      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const offer = action.payload;

        const { offerId } = action.meta.arg;

        delete state.pendingIds[offerId];

        if (offer.isFavorite && !state.favoriteIds.includes(offer.id)) {
          state.favoriteIds.push(offer.id);
        } else if (!offer.isFavorite) {
          state.favoriteIds = state.favoriteIds.filter((id) => id !== offer.id);
        }

      })
      .addCase(changeFavoriteStatus.rejected, (state, action) => {

        delete state.pendingIds[action.meta.arg.offerId];
        // state.error = action.payload ?? 'Ошибка';
        state.error = 'error';

      })
      .addCase(logout.fulfilled, (state) => {
        state.favoriteIds = [];
        state.pendingIds = {};
      });

  },
});

export const favoritesActions = {
  ...favoritesSlice.actions,
  ...favoritesThunks
};

export default favoritesSlice.reducer;
