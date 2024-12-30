// ---- Component ----
import Comments from '../components/Comments';
import fetchPostDetail, { PostDetailResponse } from '../api/fetchPostDetail';
import { useState, useEffect } from 'react';

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
      <h2>投稿の詳細画面</h2>
      <p>投稿の内容</p>
      {postDetail ? (
        <div>
          <h3>{postDetail.title}</h3>
          <p>{postDetail.body}</p>
        </div>
      ) : (
        <p>投稿が見つかりません。</p>
      )}
      <Comments />
    </article>
  );
}
