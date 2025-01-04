// ---- Component ----
import SectionContainer from '../components/layout/SectionContainer';
import PostDescription from '../features/post/PostDescription';
import CommentList from '../features/comment/CommentList';
import CreateCommentForm from '../features/comment/CreateCommentForm';

export default function Post() {
  return (
    <article>
      <SectionContainer>
        <PostDescription />
      </SectionContainer>
      <SectionContainer>
        <CommentList />
        <CreateCommentForm />
      </SectionContainer>
    </article>
  );
}
