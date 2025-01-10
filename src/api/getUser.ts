import { api } from '../lib/api-client';
import { User } from '../types/api';

export const getUser = async (userId: number): Promise<User> => {
  const response = await api.get(`/users/${userId}`);
  const userData = response.data;

  // APIレスポンスから必要な情報だけを抽出
  const extractedUser: User = {
    id: userData.id,
    name: userData.name,
    username: userData.username,
    email: userData.email,
  };

  console.log('getUser', extractedUser);

  return extractedUser;
};
