import { AxiosResponse } from 'axios';
import { api } from '../lib/api-client.ts';

export type UpdatePostRequest = {
  id: number;
  title: string;
  body: string;
};

/**
 * 投稿更新API実行処理
 * @param request
 * @returns
 */
const updatePost = async (request: UpdatePostRequest): Promise<AxiosResponse> => {
  const response = await api.put(`/posts/${request.id}`, {
    userId: 1,
    id: request.id,
    title: request.title,
    body: request.body,
  });
  return response;
};

export default updatePost;
