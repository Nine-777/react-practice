import axios, { AxiosResponse } from 'axios';

export type CreatePostRequest = {
  title: string;
  body: string;
};

/**
 * 投稿作成API実行処理
 * @param request 
 * @returns 
 */
export const createPost = async (request: CreatePostRequest): Promise<AxiosResponse> => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      userId: 1,
      title: request.title,
      body: request.body
    }
  );
  return response;
};

export default createPost;
