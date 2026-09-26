import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TSortType } from '../components/tconst';
import { RootState } from '.';
import { SortType } from '../components/const';

export type TCityOffersState = {
  activeCity: string;
  sortType: TSortType;
}

// начальное состояние
const initialState: TCityOffersState = {
  activeCity: '',
  sortType: SortType.Popular,
};

// сохраняем значение данных, которые изменяет пользователь во вне, т.е. UI
export const cityOffersSlice = createSlice({
  name: 'cityOffers',
  initialState,
  reducers: {
    // передаем название города и устанавливаем его в state
    setActiveCity(state, action: PayloadAction<string>) {
      state.activeCity = action.payload;
    },
    // передаем отсортированные офферы по городу
    setSortType(state, action: PayloadAction<TSortType>) {
      state.sortType = action.payload;
    },
    // сброс при выходе со страницы
    resetCityOffers(state) {
      state.activeCity = initialState.activeCity;
      state.sortType = initialState.sortType;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCity, setSortType, resetCityOffers } = cityOffersSlice.actions;

// селекторы, те. то, что возвращает из стора данные
export const selectActiveCity = (state: RootState) => state.cityOffers.activeCity;
export const selectSortType = (state: RootState) => state.cityOffers.sortType;
// редьюсер
export default cityOffersSlice.reducer;
