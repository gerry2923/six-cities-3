// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AppDispatch, RootState } from '../store';
// import { setOffers } from '../store/offers-slice';
import { APIRoute } from '../../components/const';
import { TOffer } from '../../components/tconst';
import { createAppAsyncThunk } from '../hooks';


// export const fetchOfferAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: RootState;
//   extra: AxiosInstance;
// }>(
//   'data/fetchOffers',
//   async (_arg, { dispatch, extra: api }) => {
//     try{
//       const { data } = await api.get<TOffer[]>(APIRoute.Offers);
//       // тут сразу диспатчим
//       dispatch(setOffers(data));
//       console.log('загрузила');
//     } catch (error) {
//       console.error('fetchOfferAction failed:', error);
//     }
//   },
// );

// У функции fetchAllOffers есть методы (т.к. она объект) fulfilled, pending, rejected, settled. createAsyncThunk вызывает эти функции автоматически. Когда запрос только начинается, то автоматически диспачится action pending. Если запрос прошел успешно, диспачится автоматически fullfilled, если ошибки - rejected
export const fetchAllOffers = createAppAsyncThunk<TOffer[], undefined>(
  // 'fetchOffers/all' - название асинхронного экшена
  // это состояние мы будем видеть в redux-dev-tools
  'fetchOffers/all',
  async(_arg, {extra: api}) => {

    // Endpoint.offers - маршрут, куда передаются данные
    const response = await api.get<TOffer[]>(APIRoute.Offers);
    return response.data;
  }
);


// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: RootState;
//   extra: AxiosInstance;
// }>(
//   'user/checkAuth',
//   async (_arg, { dispatch, extra: api }) => {
//     try{
//       await api.get(APIRoute.Login);
//       //
//       dispatch(requireAuthorization(AutorizationStatus.Auth));
//     } catch {
//       dispatch(requireAuthorization(AutorizationStatus.NoAuth));
//     }
//   }
// );
