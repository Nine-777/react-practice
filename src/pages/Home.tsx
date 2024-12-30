// ---- Components ----
import SectionContainer from '../components/SectionContainer';

export default function Home() {
  return (
    <>
      <SectionContainer>新規投稿</SectionContainer>
      <SectionContainer>
        <h2>投稿一覧</h2>
        <article>投稿１</article>
        <article>投稿２</article>
        <article>投稿３</article>
      </SectionContainer>
    </>
  );
}
