// ---- Component ----
import Comments from '../components/Comments';

export default function Post() {
  return (
    <article>
      <h2>投稿の詳細画面</h2>
      <p>投稿の内容</p>
      <Comments />
    </article>
  );
}
