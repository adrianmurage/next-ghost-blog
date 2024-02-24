import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <main className="mt-6">
        <div className="mx-auto prose prose-h2:mb-2.5 prose-a:underline-offset-4	prose-a:text-blue-500">
          <h1>Projects</h1>
          <p>
            When I'm not working on school or work projects, I'm working on my
            own projects. Here are some things I've made:
          </p>
          <div className="">
            <Link
              href="https://47places.com"
              target="_blank"
              className=""
            >
              <span className="">47 Places - </span>
              <span className="">Making tourism accessible to Kenyans</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
