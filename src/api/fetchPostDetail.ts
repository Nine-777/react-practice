import axios from 'axios';

export type PostDetailResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPostDetail = async (id: string): Promise<PostDetailResponse> => {
  const response = await axios.get<PostDetailResponse>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response.data;
};

export default fetchPostDetail;
