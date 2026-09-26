import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
// , AxiosRequestConfig
import { getToken } from './token';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  // перехватчик - срабатывают, до отправки запроса interseptors - прописываем дейстаие, перед отправлением запроса
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );
  return api;
};
