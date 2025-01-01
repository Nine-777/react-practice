import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';

export default function Card() {
  return (
    <MuiCard component="article" role="article">
      <CardContent>
        <Box component="header">
          <Typography>ユーザーID</Typography>
          <Typography component="h3">タイトル</Typography>
        </Box>
        <Typography>コンテンツ内容（先頭20文字だけ表示）</Typography>
      </CardContent>
    </MuiCard>
  );
}
