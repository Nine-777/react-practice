// ---- Component ----
import Comments from '../components/Comments';
import SectionContainer from '../components/SectionContainer';

export default function Post() {
  return (
    <article>
      <SectionContainer>
        <h2>投稿の詳細画面</h2>
        <p>投稿の内容</p>
      </SectionContainer>
      <Comments />
    </article>
  );
}
