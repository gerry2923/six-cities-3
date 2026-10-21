import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TSortType } from '../../components/types';
import { RootState } from '..';
import { DEFAULT_CITY_NAME, SortType } from '../../components/const';

export type TCityOffersState = {
  activeCity: string;
  sortType: TSortType;
  activeOfferId: string | null;
}

// начальное состояние
const initialState: TCityOffersState = {
  activeCity: DEFAULT_CITY_NAME,
  sortType: SortType.Popular,
  activeOfferId: null,
};

// сохраняем значение данных, которые изменяет пользователь во вне, т.е. UI
export const uiSlice = createSlice({
  name: 'ui',
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
    setActiveOfferId(state, action: PayloadAction<string | null>) {
      state.activeOfferId = action.payload;
    },
    // сброс при выходе со страницы
    resetCityOffers(state) {
      state.activeCity = initialState.activeCity;
      state.sortType = initialState.sortType;
      state.activeOfferId = initialState.activeOfferId;
    }
  },
});

// Action creators are generated for each case reducer function
// export const { setActiveCity, setSortType, resetCityOffers } = filtersSlice.actions;
export const uiActions = {...uiSlice.actions};
// селекторы, те. то, что возвращает из стора данные
export const selectActiveCity = (state: RootState) => state.ui.activeCity;
export const selectSortType = (state: RootState) => state.ui.sortType;
export const selectActiveOfferId = (state: RootState) => state.ui.activeOfferId;
// редьюсер
export default uiSlice.reducer;
