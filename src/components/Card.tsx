import { Card as MuiCard, CardContent, Box } from '@mui/material';
import Title from './Title.tsx';
import Body from './Body.tsx';

type CardProps = {
  userId: number;
  title: string;
  body: string;
  marginBottom?: number; // マージンボトムをオプショナルで追加
};

export default function Card({ userId, title, body, marginBottom = 2 }: CardProps) {
  // 一覧表示のため、本文を20文字で切り捨てる
  const truncatedBody = body.length > 20 ? `${body.substring(0, 20)}...` : body;

  return (
    <MuiCard
      component="article"
      role="article"
      elevation={3}
      sx={{ marginBottom }} // propsで受け取った値を適用
    >
      <CardContent>
        <Box component="header" data-user-id={userId}>
          <Title level="title-md" label={title} />
          <Body level="body-sm" label={truncatedBody} />
        </Box>
      </CardContent>
    </MuiCard>
  );
}
