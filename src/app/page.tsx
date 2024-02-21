import { getPosts } from './lib/posts';
export const dynamic = 'force-dynamic';
import Link from 'next/link';

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  posts.map((post: any) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    post.dateFormatted = new Intl.DateTimeFormat('en-US', options).format(
      new Date(post.published_at)
    );
  });

  return (
    <>
      <main className="">
        <div className="mx-auto prose prose-h2:mb-2.5 ">
          {posts?.map((post: any) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="no-underline	group"
            >
              <h2 className="group-hover:text-blue-600">{post.title}</h2>
              <p className="line-clamp-2	text-gray-500">{post.excerpt}</p>
              <div className="text-blue-600 space-x-2 font-semibold">
                <span>{post.dateFormatted}</span>
                <span>&#183;</span>
                <span>{post.reading_time} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
