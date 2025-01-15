import { Card as MuiCard, CardContent } from '@mui/material';

type CardProps = {
  marginBottom?: number; // マージンボトムをオプショナルで追加
  children: React.ReactNode;
}

export default function Card({ marginBottom = 2, children }: CardProps) {
  return (
    <MuiCard
      component="article"
      role="article"
      elevation={3}
      sx={{ marginBottom }} // propsで受け取った値を適用
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}