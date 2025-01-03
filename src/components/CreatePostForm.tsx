// ---- MUI ----
import { Box, Typography, TextField, Button } from '@mui/material';
// ---- API ----
import createPost, { CreatePostRequest } from '../api/createPost';

export default function CreatePostForm() {
  /**
   * 投稿ボタン押下時処理
   */
  const onClickPost = () => {
    const funcApi = async () => {
      try {
        // APIで使用する項目を抽出＆設定
        let title = document.getElementById('title') as HTMLInputElement;
        let body = document.getElementById('body') as HTMLInputElement;
        const createPostRequest: CreatePostRequest = {
          title: title.value,
          body: body.value,
        };
        console.log(createPostRequest);
        // 投稿作成API実行処理
        await createPost(createPostRequest);
      } catch {
        console.error('投稿ボタン押下時処理に失敗しました。');
      }
    };
    funcApi();
  };

  return (
    <>
      <Typography component="h2">新規投稿</Typography>
      <Box component="form">
        <TextField id="title" label="タイトル" />
        <TextField id="body" label="本文" multiline rows={1} />
        <Button onClick={() => onClickPost()}>投稿</Button>
      </Box>
    </>
  );
}
