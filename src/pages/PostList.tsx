import { useState, useEffect } from 'react';
import { Post, User } from '../types/api';
import { getPostList } from '../api/getPostList';
import { getUser } from '../api/getUser';
import PostFeed from '../features/post/PostFeed';

type PostWithUser = Post & {
  user: User;
};
const PostList = () => {
  const [posts, setPosts] = useState<PostWithUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPostList();

        // 投稿データにユーザー名を追加
        const postsWithUser = await Promise.all(
          postData.map(async (post) => {
            const user = await getUser(post.userId);
            return {
              ...post,
              user: user,
            };
          }),
        );

        setPosts(postsWithUser);
      } catch {
        console.error('データの取得に失敗しました');
      }
    };
    fetchData();
  }, []);

  return <PostFeed posts={posts} />;
};

export default PostList;
