import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../components/tconst';
import { RootState } from '..';
import { fetchAllOffers } from '../../services/_api-actions';
// import { offers as mockOffers } from '../mocks/offers';

export interface OffersState {
  offers: TOffer[];
  isLoading: boolean;
  // error: string | null;
}

const initialState: OffersState = {
  // offers: mockOffers,
  offers: [],
  isLoading: true,
  // error: null,
};

// тут сохраняем состояние только предложений - ДАННЫХ хранилища
export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    // мы заменяем массив с предложениями на новый массив с впредложениями, который изменили. Он лежит в action.payload
    setOffers(state, action: PayloadAction<TOffer[]>): void {
      state.offers = action.payload;
    },
  },
  // дополнительные асинхронные редьюсеры - преобразователи данных
  extraReducers(builder) {
    builder

      .addCase(fetchAllOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.isLoading = false;
      });
  },

});

// export const { setOffers } = offersSlice.actions;
export const offersActions = { ...offersSlice.actions, fetchAllOffers};
export const selectAllOffers = (state: RootState) => state.offers.offers;
export const selectIsLoading = (state: RootState) => state.offers.isLoading;
export default offersSlice.reducer; // Эта форма записи позволяет переписать имя редьюсера
