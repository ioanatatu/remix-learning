import { useParams } from '@remix-run/react';

const Post = () => {
  const params = useParams();

  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>
  );
};

export default Post;
