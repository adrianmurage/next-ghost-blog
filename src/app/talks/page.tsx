import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <main className="mt-6">
        <div className="mx-auto prose prose-h2:mb-2.5 prose-a:underline-offset-4	prose-a:text-blue-500">
          <h1>Talks</h1>
          <p>
            Giving talks for me is a cool way to fact check my knowledge about
            things. I love teaching in such environments, so from time to time I
            prepare talks and give them:
          </p>
          <ul>
            <li>
              <Link
                href="https://docs.google.com/presentation/d/1IRdaAMgEF_-URfhsx4BInIxOOVXwlW5bDU0zvktbzto/edit?usp=sharing"
                target="_blank"
              >
                Exploring What It Is like to Be a Frontend Developer in 2023
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/presentation/d/1pl8nmQbdhz4_rZ8bQ8yQ6Ney0yHXp9NFz5qynonF3L4/edit?usp=sharing"
                target="_blank"
              >
                Git & Github Made Simple
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
