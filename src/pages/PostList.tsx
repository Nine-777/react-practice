import { useState, useEffect } from 'react';
import { Post } from '../types/api';
import { getPostList } from '../api/getPostList';
import PostFeed from '../features/post/PostFeed';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostList();
        setPosts(data);
      } catch {
        console.error('投稿一覧の取得に失敗しました');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PostFeed posts={posts} />
    </>
  );
};

export default PostList;
