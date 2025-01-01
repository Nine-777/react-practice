// ---- Components ----
import SectionContainer from '../components/SectionContainer';
import CreatePostForm from '../components/CreatePostForm';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <CreatePostForm />
      <SectionContainer>
        <h2>投稿一覧</h2>
        <Card />
        <Card />
        <Card />
      </SectionContainer>
    </>
  );
}
