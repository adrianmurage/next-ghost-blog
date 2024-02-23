import Image from 'next/image';
import profilePic from '../../../public/me.jpg';
import GlowButton from '../GlowButton';

function Footer() {
  return (
    <footer className="mt-auto pt-28 pb-10 ">
      <hr />
      <div className="max-w-screen-md mx-auto">
        <div className="pt-10 pb-5 relative">
          <Image
            src={profilePic}
            alt="Adrian Murage"
            width={64}
            height={64}
            placeholder="blur"
            className="rounded-lg object-scale-down absolute -top-8"
          />
        </div>
        <div className="text-xl text-gray-700">
          <p>Hey, my name is Adrian!</p>
          <p>
            I am a web developer from Kenya, specialized in React and Node.js.
            I'm actively looking for my next role. I'm open to both full-time
            and contract roles.
          </p>
        </div>
        <div className="mt-6">
          <GlowButton
            buttonText="Hire me"
            buttonLink="mailto:adrianmurage21@gmail.com?subject=Hey%20Adrian%2C%20I'd%20love%20to%20work%20with%20you.%20Let's%20talk%3F&body=Hey%20Adrian%2C%20%0A%0AIt's%20%3Cyour%20name%3E%20from%20%3Cyour%20company%3E%20and%20I'd%20like%20to%20work%20with%20you%20on%20%3Cproject%20name%3E.%0A"
          />
        </div>
        <p className="text-sm text-gray-500 mt-8">
          &copy; 2021-present Adrian Murage. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
