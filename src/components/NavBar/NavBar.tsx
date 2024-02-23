'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import GlowButton from '../GlowButton';

function Links() {
  return (
    <div className="px-4 mt-4 mb-6 md:flex md:items-center md:gap-6 md:text-gray-500 font-medium">
      <Link
        className="block hover:text-slate-900"
        href="/"
      >
        Home
      </Link>
      <Link
        className="mt-2 block md:mt-0 hover:text-slate-900"
        href="/blog"
      >
        Blog
      </Link>
      <div className="hidden md:block">
        <GlowButton
          buttonText="Hire me"
          buttonLink="mailto:adrianmurage21@gmail.com?subject=Hey%20Adrian%2C%20I'd%20love%20to%20work%20with%20you.%20Let's%20talk%3F&body=Hey%20Adrian%2C%20%0A%0AIt's%20%3Cyour%20name%3E%20from%20%3Cyour%20company%3E%20and%20I'd%20like%20to%20work%20with%20you%20on%20%3Cproject%20name%3E.%0A"
        />
      </div>
    </div>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between py-3 md:pl-2">
        <div className="font-semibold text-gray-500 text-2xl hover:text-slate-900">
          <Link href="/">
            <p>Adrian Murage</p>
          </Link>
        </div>
        <div className="flex items-center gap-6 md:hidden">
          <GlowButton
            buttonText="Hire me"
            buttonLink="mailto:adrianmurage21@gmail.com?subject=Hey%20Adrian%2C%20I'd%20love%20to%20work%20with%20you.%20Let's%20talk%3F&body=Hey%20Adrian%2C%20%0A%0AIt's%20%3Cyour%20name%3E%20from%20%3Cyour%20company%3E%20and%20I'd%20like%20to%20work%20with%20you%20on%20%3Cproject%20name%3E.%0A"
          />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross1 className="h-7 w-7 text-gray-500" />
            ) : (
              <RxHamburgerMenu className="h-7 w-7 text-gray-500" />
            )}
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <Links />
      </div>

      {isOpen && (
        <div className="md:hidden absolute bg-blue-600 text-white w-11/12 outline-dashed outline-1 rounded-sm">
          <Links />
        </div>
      )}
    </header>
  );
}

export default NavBar;
