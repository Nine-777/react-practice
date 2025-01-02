// ---- React ----
import { useState, useEffect } from 'react';
// ---- Component ----
import Comments from '../components/Comments';
import PostDescription from '../components/PostDescription';
// ---- API ----
import fetchPostDetail, { PostDetailResponse } from '../api/fetchPostDetail';

export default function Post() {
  const [postDetail, setPostDetail] = useState<PostDetailResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPostDetail();
        setPostDetail(response);
      } catch {
        console.error('投稿が取得できませんでした');
      }
    };

    fetchData();
  }, []);

  return (
    <article>
      <PostDescription postDetail={postDetail} />
      <Comments />
    </article>
  );
}
