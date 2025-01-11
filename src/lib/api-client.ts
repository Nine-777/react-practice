import Axios from 'axios';
import { env } from '../config/env';
import camelcaseKeys from 'camelcase-keys';

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
    // レスポンスをキャメルケースに変換
    if (response.data && typeof response.data === 'object') {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
