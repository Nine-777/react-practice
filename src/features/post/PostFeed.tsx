import React from 'react';
import { Post, User } from '../../types/api';
import { Box, Typography } from '@mui/material';
import Card from '../../components/card/Card.tsx';
import Title from '../../components/card/Title.tsx';
import Body from '../../components/card/Body.tsx';
import Heading from '../../components/typography/Heading.tsx';
import { Link } from 'react-router';

type PostWithUser = Post & {
  user: User;
};

type PostFeedProps = {
  posts: PostWithUser[];
};

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <>
      <Heading level="h6" label="投稿一覧" align="left" />
      {posts.slice(0, 10).map((post) => {
        // 一覧表示のため、本文を20文字で切り捨てる
        const truncatedBody =
          post.body.length > 20 ? `${post.body.substring(0, 20)}...` : post.body;
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <Card>
              <Box component="header" data-user-id={post.userId}>
                <Typography component="p">{post.user.username}</Typography>
                <Title level="title-md" label={post.title} />
                <Body level="body-sm" label={truncatedBody} />
              </Box>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default PostFeed;
