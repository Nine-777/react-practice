// ---- Components ----
import SectionContainer from '../components/SectionContainer';
import CreatePostForm from '../components/CreatePostForm';
import PostFeed from '../components/PostFeed';

export default function Home() {
  return (
    <>
      <SectionContainer>
        <CreatePostForm />
      </SectionContainer>
      <SectionContainer>
        <PostFeed />
      </SectionContainer>
    </>
  );
}
