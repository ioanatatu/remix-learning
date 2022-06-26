import { useLoaderData, Link } from '@remix-run/react';

// in here do server stuff, get your data
// use the hook in the function to access data on the client
export const loader = () => {
  // this loader runs on the server, so the console log appears in terminal
  console.log('jashahjsh');

  // just hardcoding some data
  const data = {
    posts: [
      { id: 1, title: 'Posts 1', body: 'This is the first test post' },
      { id: 2, title: 'Posts 2', body: 'This is the second test post' },
      { id: 3, title: 'Posts 3', body: 'This is the third test post' },
    ],
  };
  return data;
};

const PostItems = () => {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
      </div>
      <ul className="posts-list">
        {posts.map((post: { id: string; title: string; body: string }) => (
          <li key={posts.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostItems;
