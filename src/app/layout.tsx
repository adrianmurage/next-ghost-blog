import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adrian Murage - React (Next.js) Developer',
  description:
    'Adrian Murage is a web developer from Kenya, specialized in React and Node.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`px-3 flex flex-col h-screen ${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
