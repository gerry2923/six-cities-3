import { dropToken, saveToken } from '../../services/token';
import { APIRoute } from '../../components/const';
import { TUser } from '../../components/tconst';
import { createAppAsyncThunk } from '../hooks';

export const checkAuth = createAppAsyncThunk<TUser, undefined>(
  'user/checkAuth',
  async(_arg, {extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.get<TUser>(APIRoute.Login);
      return data;
    } catch {
      dropToken();
      return rejectWithValue('Не авторизован');
    }
  }
);


export const login = createAppAsyncThunk<>(
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
