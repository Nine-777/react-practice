// ---- Compoents ----
import FormButton from "../../components/button/FormButton";

export default function CreateCommentForm() {
  return (
    <>
      <h3>新規コメント</h3>
      <form action="#">
        <textarea name="#" id="#"></textarea>
        <FormButton label="送信" />
      </form>
    </>
  );
}
