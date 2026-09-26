import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../components/tconst';
import { RootState } from '.';
import { offers as mockOffers } from '../mocks/offers';

export interface OffersState {
  offers: TOffer[];
  isLoading: boolean;
  // error: string | null;
}

const initialState: OffersState = {
  offers: mockOffers,
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
  }
});

export const {setOffers} = offersSlice.actions;
export const selectAllOffers = (state: RootState) => state.offers.offers;
export default offersSlice.reducer; // Эта форма записи позволяет переписать имя редьюсера
