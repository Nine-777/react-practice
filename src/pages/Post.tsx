// ---- React ----
import { useState, useEffect } from 'react';
// ---- Component ----
import SectionContainer from '../components/layout/SectionContainer';
import PostDescription from '../features/post/PostDescription';
import CommentList from '../features/comment/CommentList';
import { Link, useParams } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// ---- API ----
import fetchPostDetail, { PostDetailResponse } from '../api/fetchPostDetail';

export default function Post() {
  const { id } = useParams<{ id: string }>();

  const [postDetail, setPostDetail] = useState<PostDetailResponse>();
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.error('投稿IDが見つかりません');
        return;
      }
      try {
        const response = await fetchPostDetail(id);
        setPostDetail(response);
      } catch {
        console.error('投稿が取得できませんでした');
      }
    };
    fetchData();
  }, [id]);

  return (
    <article>
      <SectionContainer>
        <Link
          to={`/`}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <ChevronLeftIcon />
        </Link>
        {postDetail ? (
          <PostDescription id={Number(id)} title={postDetail.title} body={postDetail.body} />
        ) : (
          <></>
        )}
      </SectionContainer>
      <SectionContainer>
        <CommentList />
      </SectionContainer>
    </article>
  );
}
