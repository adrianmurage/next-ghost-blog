import { getPosts } from './lib/posts';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
