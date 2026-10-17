import { dropToken, getToken, saveToken } from '../../services/token';
import { APIRoute } from '../../components/const';
import { TLogInfo, TUser } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';


export const checkAuth = createAppAsyncThunk<TUser, undefined>(
  'user/checkAuth',
  async(_arg, {extra: api, rejectWithValue}) => {

    if (!getToken()) {
      return rejectWithValue('Нет токена');
    }

    try {
      const { data } = await api.get<TUser>(APIRoute.Login);
      return data;
    } catch {
      dropToken();
      return rejectWithValue('Не авторизован');
    }
  }
);

export const login = createAppAsyncThunk<TUser, TLogInfo>(
  'user/login',
  async ({ email, password }, { extra: api, rejectWithValue }) => {

    try {
      const { data } = await api.post<TUser>(APIRoute.Login, { email, password });
      saveToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue('Неверный email или пароль');
    }
  }
);

export const logout = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async(_arg, {extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
    } finally {
      dropToken();
    }
  }
);
