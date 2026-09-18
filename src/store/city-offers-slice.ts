import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../components/tconst';
import { RootState } from './store';

export type TCityOffersState = {
  activeCity: string;
  offersByCity: TOffer[];
}

// начальное состояние
const initialState: TCityOffersState = {
  activeCity: '',
  offersByCity : [],
};

// slice
export const cityOffersSlice = createSlice({
  name: 'cityOffers',
  initialState,
  reducers: {
    // передаем название города и устанавливаем его в state
    setActiveCity(state, action: PayloadAction<string>) {
      state.activeCity = action.payload;
    },
    // передаем отсортированные офферы по городу
    setOffersByCity(state, action: PayloadAction<TOffer[]>) {
      state.offersByCity = action.payload;
    },
    // сброс при выходе со страницы
    resetCityOffers(state) {
      state.activeCity = initialState.activeCity;
      state.offersByCity = initialState.offersByCity;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCity, setOffersByCity, resetCityOffers } = cityOffersSlice.actions;

// селекторы, те. то, что возвращает из стора данные

export const selectActiveCity = (state: RootState) => state.cityOffers.activeCity;

export const selectOffersByCity = (state: RootState) => state.cityOffers.offersByCity;
// редьюсер
export default cityOffersSlice.reducer;
