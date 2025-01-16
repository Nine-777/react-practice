import axios, { AxiosResponse } from 'axios';
import { Comment } from '../types/api';

/**
 * コメント一覧取得API実行処理
 * @param id
 * @returns
 */
const getComment = async (id: string | undefined): Promise<AxiosResponse> => {
  const response = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  return response;
};

export default getComment;
