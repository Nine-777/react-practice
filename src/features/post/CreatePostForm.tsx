// ---- MUI ----
import Grid from '@mui/material/Grid2';
import TextField from '../../components/form/TextField';
import FormButton from '../../components/button/FormButton.tsx';

// ---- API ----
import createPost, { CreatePostRequest } from '../../api/createPost';

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
    <Grid container spacing={2}>
      <Grid size={3}>
        <TextField id="title" label="タイトル" fullWidth />
      </Grid>
      <Grid size={7}>
        <TextField id="body" label="本文" fullWidth />
      </Grid>
      <Grid size={2}>
        <FormButton
          onClick={onClickPost}
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
