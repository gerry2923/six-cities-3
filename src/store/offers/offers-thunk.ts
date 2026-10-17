import { APIRoute } from '../../components/const';
import { TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';


// У функции fetchAllOffers есть методы (т.к. она объект) fulfilled, pending, rejected, settled. createAsyncThunk вызывает эти функции автоматически. Когда запрос только начинается, то автоматически диспачится action pending. Если запрос прошел успешно, диспачится автоматически fullfilled, если ошибки - rejected
export const fetchAllOffers = createAppAsyncThunk<TOffer[], undefined>(
  // 'fetchOffers/all' - название асинхронного экшена
  // это состояние мы будем видеть в redux-dev-tools
  'fetchOffers/all',
  async (_arg, { extra: api }) => {

    // Endpoint.offers - маршрут, куда передаются данные
    const response = await api.get<TOffer[]>(APIRoute.Offers);
    return response.data;
  }
);
