// ---- React ----
import { useState, useEffect } from 'react';
// ---- Component ----
import PostDescription from '../components/PostDescription';
import CommentList from '../components/CommentList';
import CreateCommentForm from '../components/CreateCommentForm';
import SectionContainer from '../components/SectionContainer';
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
      <SectionContainer>
        <CommentList />
        <CreateCommentForm />
      </SectionContainer>
    </article>
  );
}
