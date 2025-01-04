// ---- Components ----
import SectionContainer from '../components/layout/SectionContainer';
import CreatePostForm from '../features/post/CreatePostForm';

export default function Home() {
  return (
    <>
      <SectionContainer>
        <CreatePostForm />
      </SectionContainer>
    </>
  );
}
