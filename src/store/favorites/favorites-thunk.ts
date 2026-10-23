import { APIRoute } from '../../components/const';
import { OfferId, TFavoriteStatus, TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';

export const toFavoriteStatus = (isFavorite: boolean): TFavoriteStatus => isFavorite ? 0 : 1;

export type TFavoriteInfo = {
  offerId: OfferId;
  isFavorite: boolean;
}
// fetch - получить
export const fetchFavorites = createAppAsyncThunk<OfferId[], void>(
  'favorites/fetch',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TOffer[]>(APIRoute.Favorites);
      return response.data.map((offer) => offer.id); // возвращаем только id офферов
    } catch(error) {
      return rejectWithValue('Не удалось загрузить избранное');
    }
    // api.get('тут пишем адрес url КУДА мы шлём запрос')

  }
);

// тут мы используем только один thunk на добавление и удаление из избранного, но можно сделать два
// также можно преобразовать значение статуса: передавать true или false, а затем заменять их на 0 или 1
export const changeFavoriteStatus = createAppAsyncThunk<TOffer, TFavoriteInfo>(
  'favorite/changeStatus',
  async ({ offerId, isFavorite }, { extra: api, rejectWithValue }) => {

    const status: TFavoriteStatus = isFavorite ? 0 : 1;
    try {
      // console.log(`${APIRoute.Favorites}/${offerId}/${status}`);
      const { data } = await api.post<TOffer>(`${APIRoute.Favorites}/${offerId}/${status}`);

      return data;
    } catch (error) {
      return rejectWithValue('не удалось изменить избранное значение');
    }
  }
);

export const favoritesThunks = { fetchFavorites, changeFavoriteStatus};
