import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
// , AxiosRequestConfig
import { getToken } from './token';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    // headers: {
    //   x: '...'
    // }
  });

  // перехватчик - срабатывают, до отправки запроса interseptors - прописываем дейстаие, перед отправлением запроса до отправки на сервер
  api.interceptors.request.use(
    // config - объект конфигурации. у нас это baseUrl + timeout
    (config: InternalAxiosRequestConfig) => {
      // извлекаем токен из localStorage
      const token = getToken();
      // выполняем проверку:
      // если токен есть и есть секция с заголовком, то к заголовку добавим дополнительный ключ
      // Иногда заголовка в начале создания конфигурации нет, но он появляется при отправке или принятии запроса
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );
  return api;
};
