import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/me.jpg';

function SocialSiteLink({ site, link }: { site: string; link: string }) {
  return (
    <Link
      className="flex items-center gap-2 border p-4 rounded-lg hover:bg-gray-100 transition-colors ease-in-out duration-200 underline-offset-4"
      href={link}
      target="_blank"
    >
      {site}{' '}
      <svg
        className="mr-2"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        ></path>
      </svg>
    </Link>
  );
}

export default async function Page() {
  const name = 'Adrian Murage';
  const socialMediaLinks = [
    { site: 'TikTok', link: 'https://www.tiktok.com/@adrianmurage' },
    { site: 'LinkedIn', link: 'https://linkedin.com/in/adrianmurage' },
    { site: 'Instagram', link: 'https://www.instagram.com/adrianmurage/' },
    { site: 'Twitter', link: 'https://twitter.com/adrianmurage' },
  ];

  return (
    <>
      <main className="mt-6">
        <div className="mx-auto prose prose-a:underline-offset-4	prose-a:text-blue-500">
          <h1>About Me</h1>
          <header className="">
            <div className="flex gap-8 ">
              <Image
                src={profilePic}
                alt="Adrian Murage"
                width={108}
                height={108}
                placeholder="blur"
                className="rounded-lg m-0"
              />
              <h2 className="not-prose text-xl font-bold">Hi 👋🏾 I'm {name}</h2>
            </div>
            <div className="">
              <p>
                During normal business hours, I am a computer science major at
                United States International University - Africa (USIU), in my
                ✨final year✨.
              </p>
              <p>
                Outside of these hours, I am a React (Next.js) / Node.js
                developer and a Technical writer (how I pay my rent 🚀).
              </p>
              <p>
                I run{' '}
                <Link
                  href="https://47places.com"
                  target="_blank"
                >
                  47 Places,
                </Link>{' '}
                a website that aims to make tourism more accessible to Kenyans.
              </p>
              <p>
                I also run this blog on the side, where I write about web
                development, React, Node.js, and my escapades building projects.
              </p>
            </div>
          </header>
          <div>
            <h2 className="">Now</h2>
            <p>Here's what I'm up to right now:</p>
            <div className="flex items-center mb-4 line-through">
              <input
                disabled
                checked
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Reducing friction in my writing process by building a{' '}
                <Link
                  className="underline-offset-4	text-blue-500"
                  target="_blank"
                  href="mailto:adrianmurage21@gmail.com?subject=Hi%20Adrian%20%F0%9F%91%8B"
                >
                  blog template
                </Link>{' '}
                that uses GhostCMS.
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                disabled
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Authoring a MERN stack course for{' '}
                <Link
                  className="underline-offset-4	text-blue-500"
                  target="_blank"
                  href="https://www.educative.io/"
                >
                  Educative.io
                </Link>
                .
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                disabled
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Building an email outreach tool as I gear up to look for work.
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                disabled
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Adding places to{' '}
                <Link
                  className="underline-offset-4	text-blue-500"
                  target="_blank"
                  href="https://47places.com"
                >
                  47 Places
                </Link>{' '}
                and tweaking the custom CMS I use to manage places.
              </label>
            </div>
          </div>
          <div>
            <h2>Some things I've done in the past:</h2>
            <ul>
              <li>
                Worked as a freelancer, designing and rebuilding the marketing
                website for{' '}
                <Link
                  target="_blank"
                  href="https://fluidtechglobal.com/"
                >
                  Fluid Tech Global.
                </Link>
              </li>
              <li>
                Written a number of{' '}
                <Link href="/writing">technical articles</Link> and worked as a
                technical writing editor for{' '}
                <Link
                  target="_blank"
                  href="https://www.section.io/"
                >
                  Section.io
                </Link>{' '}
                (Remote).
              </li>
              <li>
                Given <Link href="/talks">2 talks</Link> at my university as
                part of my work as a{' '}
                <Link
                  target="_blank"
                  href="https://gdsc.community.dev/united-states-international-university-africa/"
                >
                  Google Developer Student Clubs(GDSC) USIU-Africa
                </Link>{' '}
                core team member.
              </li>
              <li>
                Interned at two companies,{' '}
                <Link
                  target="_blank"
                  href="https://ajua.com/"
                >
                  Ajua
                </Link>{' '}
                (Nairobi, Kenya) and{' '}
                <Link
                  target="_blank"
                  href="https://hackernoon.com/"
                >
                  HackerNoon
                </Link>{' '}
                (Remote).
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              If you would like to get in touch with me,{' '}
              <Link
                target="_blank"
                href="mailto:adrianmurage21@gmail.com?subject=Hi%20Adrian%20%F0%9F%91%8B"
              >
                {' '}
                email
              </Link>{' '}
              is your best bet.
            </p>
            <p>
              I also have social media. But, I might miss your message if you DM
              me there...
            </p>

            <div className="flex gap-10 flex-wrap">
              {socialMediaLinks.map(({ site, link }) => (
                <SocialSiteLink
                  key={site}
                  site={site}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
