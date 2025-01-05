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
  const [postDetail, setPostDetail] = useState<PostDetailResponse>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // FIXME: 一覧画面から詳細画面に遷移する際にprops等で投稿IDを取得後、以下のfetchPostDetailに設定する想定
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
        {postDetail ? (
          // FIXME: 一覧画面から詳細画面に遷移する際に取得した投稿IDをidに設定
          <PostDescription id={1} title={postDetail.title} body={postDetail.body} />
        ) : (
          <></>
        )}
      </SectionContainer>
      <SectionContainer>
        <CommentList />
        <CreateCommentForm />
      </SectionContainer>
    </article>
  );
}
