import { Post } from '../types/api';

/**
 * ローカルストレージから投稿データを取得する
 * @returns 保存されている投稿データの配列
 */
const getStoredPosts = (): Post[] => {
  const storedPosts = localStorage.getItem('posts');
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export default getStoredPosts;