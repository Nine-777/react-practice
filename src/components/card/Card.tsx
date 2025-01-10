import { useState, useEffect } from 'react';
import { User } from '../../types/api.ts';
import { getUser } from '../../api/getUser.ts';
import { Card as MuiCard, CardContent, Box, Typography } from '@mui/material';
import Title from './Title.tsx';
import Body from './Body.tsx';

type CardProps = {
  userId: number;
  title: string;
  body: string;
  marginBottom?: number; // マージンボトムをオプショナルで追加
};

export default function Card({ userId, title, body, marginBottom = 2 }: CardProps) {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: User = await getUser(userId);
        setUsername(user.username);
      } catch {
        console.error('ユーザー情報の取得に失敗しました');
      }
    };

    fetchUser();
  }, []);

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
          <Typography component="p">{username}</Typography>
          <Title level="title-md" label={title} />
          <Body level="body-sm" label={truncatedBody} />
        </Box>
      </CardContent>
    </MuiCard>
  );
}
