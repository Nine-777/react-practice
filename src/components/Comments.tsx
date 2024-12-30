// ---- Components ----
import SubmitButton from './SubmitButton';
import SectionContainer from './SectionContainer';

export default function Comments() {
  return (
    <SectionContainer>
      <h3>コメント一覧</h3>
      <ol>
        <li>コメント１</li>
        <li>コメント２</li>
        <li>コメント３</li>
      </ol>
      <h3>新規コメント</h3>
      <form action="#">
        <textarea name="#" id="#"></textarea>
        <SubmitButton />
      </form>
    </SectionContainer>
  );
}
