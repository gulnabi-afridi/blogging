import Image from 'next/image';
import Hero from '@/components/home/Hero';
import NewsLetter from '@/components/home/NewsLetter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Blogs />
      <NewsLetter />
    </main>
  );
}
