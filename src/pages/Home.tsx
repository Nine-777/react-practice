// ---- Components ----
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';

export default function Home() {

  return (
    <>
      <SectionContainer>新規投稿</SectionContainer>
      <SectionContainer>
        <h2>投稿一覧</h2>
        <Card />
        <Card />
        <Card />
      </SectionContainer>
    </>
  );
}
