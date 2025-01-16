// ---- React ----
import { useState, useEffect } from 'react';
// ---- Component ----
import SectionContainer from '../components/layout/SectionContainer';
import PostDescription from '../features/post/PostDescription';
import CommentList from '../features/comment/CommentList';
import { Link, useParams } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// ---- API ----
import { Comment } from '../types/api';
import fetchPostDetail, { PostDetailResponse } from '../api/fetchPostDetail';
import getComment from '../api/getComment';

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const [postDetail, setPostDetail] = useState<PostDetailResponse>();
  const [comments, setComments] = useState<Comment[]>();
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.error('投稿IDが見つかりません');
        return;
      }
      try {
        // 投稿詳細取得API実行処理
        const fetchPostDetailResponse = await fetchPostDetail(id);
        setPostDetail(fetchPostDetailResponse);
        // コメント一覧取得API実行処理
        const getCommentResponse = await getComment(id);
        setComments(getCommentResponse.data);
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
            color: 'black',
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
        <CommentList id={id} comments={comments} />
      </SectionContainer>
    </article>
  );
}
