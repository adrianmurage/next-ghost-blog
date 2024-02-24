import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export const revalidate = 3600; // revalidate at most every hour

export const metadata: Metadata = {
  title: 'Blog - Adrian Murage',
  description:
    'Adrian Murage writes about web development, React, Node.js, and his escapades building projects.',
};

export default async function Page() {
  const posts = await getPosts();

  posts.map((post: any) => {
    const options: Intl.DateTimeFormatOptions = {
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
      <main className="mt-6">
        <div className="mx-auto prose prose-h2:mb-2.5 prose-a:underline-offset-4	prose-a:text-blue-500 ">
          <h1>All Blog Posts</h1>
          {posts?.map((post: any) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              className="no-underline	group block pt-12 first:pt-0"
            >
              <h2 className="mt-0 group-hover:text-blue-600">{post.title}</h2>
              <p className="line-clamp-2	text-gray-500">{post.excerpt}</p>
              <div className="text-blue-500 space-x-2">
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
