// ---- Components ----
import SectionContainer from '../components/layout/SectionContainer';
import CreatePostForm from '../features/post/CreatePostForm';
import PostList from './PostList';

export default function Home() {
  return (
    <>
      <SectionContainer>
        <CreatePostForm />
        <PostList />
      </SectionContainer>
    </>
  );
}
