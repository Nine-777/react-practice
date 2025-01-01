// ---- MUI ----
import { Box, Typography, TextField } from '@mui/material';
// ---- Components ----
import SubmitButton from './SubmitButton';
import SectionContainer from './SectionContainer';

export default function CreatePostForm() {
  return (
    <SectionContainer>
      <Typography component="h2">新規投稿</Typography>
      <Box component="form">
        <TextField id="title" label="タイトル" />
        <TextField id="body" label="本文" multiline rows={1} />
        <SubmitButton />;
      </Box>
    </SectionContainer>
  );
}
