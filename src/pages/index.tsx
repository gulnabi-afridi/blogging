import Image from 'next/image';
import Hero from '@/components/home/Hero';
import NewsLetter from '@/components/home/NewsLetter';
import Blogs from '@/components/home/blogs/Blogs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Blogs />
      <NewsLetter />
    </main>
  );
}
