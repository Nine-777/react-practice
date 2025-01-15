  import { Post } from '../types/api';
  import getStoredPosts from './getStoredPosts.ts';

  /**
   * 投稿データをローカルストレージに保存する
   * @param postData 保存する投稿データ
   */

  const saveToLocalStorage = (postData: Post) => {
    try {
      const savedPosts = getStoredPosts();
      localStorage.setItem('posts', JSON.stringify([...savedPosts, postData]));
    } catch (error) {
      console.error('ローカルストレージへの保存に失敗しました:', error);
      throw new Error('投稿データの保存に失敗しました');
    }
  };

  export default saveToLocalStorage;