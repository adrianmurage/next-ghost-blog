import { getSinglePost } from '@/app/lib/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);

  return (
    <main className="">
      <article className="prose md:prose-lg  mx-auto">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
