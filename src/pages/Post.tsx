// ---- Component ----
import PostDescription from '../components/PostDescription';
import CommentList from '../components/CommentList';
import CreateCommentForm from '../components/CreateCommentForm';
import SectionContainer from '../components/SectionContainer';

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
