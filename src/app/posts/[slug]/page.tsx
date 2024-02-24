import { getPosts, getSinglePost } from '@/app/lib/posts';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const post = await getSinglePost(slug);

  return {
    title: `${post.title} - Adrian Murage`,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);

  return (
    <main className="mt-6">
      <article className="prose md:prose-lg  mx-auto prose-a:underline-offset-4	prose-a:text-blue-500">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
