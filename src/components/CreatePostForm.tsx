// ---- MUI ----
import { Box, Typography, TextField, Button } from '@mui/material';
// ---- Components ----
import SectionContainer from './SectionContainer';
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
          let createPostTitle = document.getElementById('title') as HTMLInputElement;
          let createPostBody = document.getElementById('body') as HTMLInputElement;
          const createPostRequest: CreatePostRequest = {
            title: createPostTitle.value,
            body: createPostBody.value
          }
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
    <SectionContainer>
      <Typography component="h2">新規投稿</Typography>
      <Box component="form">
        <TextField id="title" label="タイトル" />
        <TextField id="body" label="本文" multiline rows={1} />
        <Button onClick={() => onClickPost()}>
          投稿
        </Button>
      </Box>
    </SectionContainer>
  );
}
