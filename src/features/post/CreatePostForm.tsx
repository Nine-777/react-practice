// ---- React ----
import { useState } from 'react';
// ---- Types ----
import { Post, User } from '../../types/api';
// ---- MUI ----
import Grid from '@mui/material/Grid2';
import TextField from '../../components/form/TextField';
import FormButton from '../../components/button/FormButton.tsx';
// ---- API ----
import createPost, { CreatePostRequest } from '../../api/createPost';
import saveToLocalStorage from '../../api/saveToLocalStorage.ts';
import getStoredPosts from '../../api/getStoredPosts.ts';

type PostWithUser = Post & {
  user: User;
};

type CreatePostFormProps = {
  posts: PostWithUser[];
};

/**
 * 新規投稿データを作成する
 * @param request 投稿リクエストデータ
 * @param currentPosts 現在の投稿一覧
 * @returns 新規投稿データ
 */
const createNewPostData = (request: CreatePostRequest, currentPosts: Post[]): Post => {
  const savedPosts = getStoredPosts();
  const maxId =
    savedPosts.length > 0 ? Math.max(...savedPosts.map((post) => post.id)) : currentPosts.length;

  return {
    userId: 999, // 仮のユーザーID
    id: maxId + 1,
    title: request.title,
    body: request.body,
  };
};

// ---- Components ----
export default function CreatePostForm({ posts }: CreatePostFormProps) {
  const [newPost, setNewPost] = useState<CreatePostRequest>({
    title: '',
    body: '',
  });

  /**
   * フォームの入力値をリセットする
   */
  const resetForm = () => {
    setNewPost({ title: '', body: '' });
  };

  /**
   * 投稿ボタン押下時の処理
   */
  const onClickPost = async () => {
    try {
      // API実行（エラーが発生しても後続の処理は継続）
      try {
        await createPost(newPost);
      } catch (error) {
        console.error('API実行に失敗しました:', error);
      }

      // 新規投稿データを作成しlocalStorageに保存
      const newPostData = createNewPostData(newPost, posts);
      saveToLocalStorage(newPostData);

      // フォームのリセット
      resetForm();
      // ページをリロード
      window.location.reload();
    } catch (error) {
      console.error('投稿処理に失敗しました:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <TextField
          id="title"
          label="タイトル"
          value={newPost.title}
          onChange={(e) => setNewPost({ title: e.target.value, body: newPost.body })}
          fullWidth
        />
      </Grid>
      <Grid size={7}>
        <TextField
          id="body"
          label="本文"
          fullWidth
          value={newPost.body}
          onChange={(e) => setNewPost({ title: newPost.title, body: e.target.value })}
        />
      </Grid>
      <Grid size={2}>
        <FormButton
          handleClickButton={onClickPost}
          icon="send"
          label="投稿"
          sx={{
            height: '100%',
          }}
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
