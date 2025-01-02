// ---- Components ----
import SectionContainer from './SectionContainer';
import Card from '../components/Card';

export default function PostFeed() {
  return (
    <SectionContainer>
      <h2>投稿一覧</h2>
      <Card />
      <Card />
      <Card />
    </SectionContainer>
  );
}
