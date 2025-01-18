import { useState, useEffect } from 'react';
// ---- MUI ----
import { Box } from '@mui/material';
// ---- Types ----
import { Post, User } from '../types/api';
// ---- API ----
import { getPostList } from '../api/getPostList';
import { getUser } from '../api/getUser';
import getStoredPosts from '../api/getStoredPosts';
// ---- Components ----
import PostFeed from '../features/post/PostFeed';
import SectionContainer from '../components/layout/SectionContainer';
import CreatePostForm from '../features/post/CreatePostForm';

type PostWithUser = Post & {
  user: User;
};

export default function Home() {
  const [posts, setPosts] = useState<PostWithUser[]>([]);

  useEffect(() => {
    // 投稿一覧画面作成のためのデータを取得して加工しstateにセット
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

        // あればlocalStorageからデータを取得
        const storedPosts = getStoredPosts();
        const storedPostWithUser = storedPosts.map((post) => {
          return {
            ...post,
            user: {
              id: post.userId,
              name: '山田 太郎',
              username: 'テストユーザー',
              email: 'test@example.co.jp',
            },
          };
        });

        // APIで取得したデータとlocalStorageのデータを結合
        const integratedData = [...postsWithUser, ...storedPostWithUser];

        // データを降順に並び替え
        const sortedintegratedData = integratedData.sort((a, b) => b.id - a.id);

        setPosts(sortedintegratedData);
      } catch {
        console.error('データの取得に失敗しました');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box className="home-main-box">
        <SectionContainer>
          <CreatePostForm posts={posts} />
          <PostFeed posts={posts} />
        </SectionContainer>
      </Box>
    </>
  );
}
