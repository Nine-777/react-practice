import { AxiosResponse } from 'axios';
import { api } from '../lib/api-client.ts';

/**
 * 投稿削除API実行処理
 * @param id
 * @returns
 */
const deletePost = async (id: number | undefined): Promise<AxiosResponse> => {
  const response = await api.delete(`/posts/${id}`);
  return response;
};

export default deletePost;
