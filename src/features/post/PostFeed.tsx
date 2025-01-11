import React from 'react';
import { Post } from '../../types/api.ts';
import Card from '../../components/card/Card.tsx';
import Heading from '../../components/typography/Heading.tsx';
import { Link } from 'react-router';

type PostFeedProps = {
  posts: Post[];
};

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <>
      <Heading level="h6" label="投稿一覧" align="left" />
      {posts.slice(0, 10).map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <Card key={post.id} userId={post.userId} title={post.title} body={post.body} />
        </Link>
      ))}
    </>
  );
};

export default PostFeed;
