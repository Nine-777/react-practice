import React from 'react';
import { Post } from '../types/api.ts';
import Card from './Card.tsx';
import Heading from './Heading.tsx';

type PostFeedProps = {
  posts: Post[];
};

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <>
      <Heading level="h6" label="投稿一覧" align="left" />
      {posts.slice(0, 10).map((post) => (
        <Card key={post.id} userId={post.userId} title={post.title} body={post.body} />
      ))}
    </>
  );
};

export default PostFeed;
