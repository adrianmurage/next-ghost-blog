import Link from 'next/link';

function GlowButton({
  buttonText,
  buttonLink,
  px,
  py,
}: {
  buttonText: string;
  buttonLink: string;
  px: string;
  py: string;
}) {
  return (
    <>
      <div className="relative inline-flex group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          role="button"
          target="_blank"
          className={`relative inline-flex items-center justify-center px-${px} py-${py} text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
          href={buttonLink}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
}

export default GlowButton;
