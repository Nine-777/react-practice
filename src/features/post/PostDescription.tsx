// ---- Types ----
interface Props {
  postDetail: {
    title: string;
    body: string;
  } | null;
}

export default function PostDescription({ postDetail }: Props) {
  return (
    <>
      <h2>投稿の詳細画面</h2>
      <p>投稿の内容</p>
      {postDetail ? (
        <div>
          <h3>{postDetail.title}</h3>
          <p>{postDetail.body}</p>
        </div>
      ) : (
        <p>投稿が見つかりません。</p>
      )}
    </>
  );
}
