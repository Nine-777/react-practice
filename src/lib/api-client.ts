import Axios from 'axios';
import { env } from '../config/env';

// 共通の設定を持つ Axios インスタンス
export const api = Axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 共通のレスポンス処理
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
