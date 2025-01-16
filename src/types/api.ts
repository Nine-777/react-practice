export type Post = {
  userId: number; // ユーザーID
  id: number; //  投稿ID
  title: string; // タイトル
  body: string; // 本文
};

export type User = {
  id: number; // ユーザーID
  name: string; // 名前
  username: string; // ユーザー名
  email: string; // メールアドレス
};

export type Comment = {
  postId: number; // 投稿ID
  id: number; // コメントID
  name: string; // 名前
  email: string; // メールアドレス
  body: string; // 本文
};
