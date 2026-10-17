import { APIRoute } from '../../components/const';
import { TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';


export type TFavoriteInfo = {
  offerId: string;
  status: 0 | 1; // 1 - добавить, 0 - удалить
}
// fetch - получить
export const fetchFavorites = createAppAsyncThunk<TOffer[], undefined>(
  'favorite/fetchAll',
  async (_arg, {extra: api}) => {
    // api.get('тут пишем адрес url КУДА мы шлём запрос')
    const response = await api.get<TOffer[]>(APIRoute.Favorites);
    return response.data;
  }
);

// тут мы используем только один thunk на добавление и удаление из избранного, но можно сделать два
// также можно преобразовать значение статуса: передавать true или false, а затем заменять их на 0 или 1
export const changeFavoriteStatus = createAppAsyncThunk<TOffer, TFavoriteInfo>(
  'favorite/changeStatus',
  async ({ offerId, status }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<TOffer>(`${APIRoute.Favorites}/${offerId}/${status}`);
      return data;
    } catch (error) {
      return rejectWithValue('не удалось добавить в/удалить из избранного');
    }
  }
);
