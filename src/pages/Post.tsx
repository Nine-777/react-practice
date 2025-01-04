// ---- React ----
import { useState, useEffect } from 'react';
// ---- Component ----
import SectionContainer from '../components/layout/SectionContainer';
import PostDescription from '../features/post/PostDescription';
import CommentList from '../features/comment/CommentList';
import CreateCommentForm from '../features/comment/CreateCommentForm';
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
      <SectionContainer>
        <PostDescription postDetail={postDetail} />
      </SectionContainer>
      <SectionContainer>
        <CommentList />
        <CreateCommentForm />
      </SectionContainer>
    </article>
  );
}
