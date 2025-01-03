import { api } from '../lib/api-client.ts';
import { Post } from '../types/api.ts';

export const getPostList = async (): Promise<Post[]> => {
  console.log('getPostList');
  const response = await api.get<Post[]>('/posts');
  return response.data;
};
