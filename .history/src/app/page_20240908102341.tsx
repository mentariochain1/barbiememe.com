import Image from 'next/image';
import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';

const SegaShowcase = dynamic(() => import('../components/SegaShowcase'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 via-pink-500 via-rose-400 to-fuchsia-500"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '20px 20px'
        }}></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full p-4">
          <PixelNavigation />
        </header>
        <main className="flex-grow flex flex-col items-center justify-start px-4 pt-8">
          <Hero />
          <div className="w-full max-w-4xl mt-16">
            <SegaShowcase />
          </div>
        </main>
        <Footer />
      </div>
      <div className="fixed top-0 right-0 z-50 pointer-events-none">
        <Image
          src="/assets/character.png"
          alt="Barbie Character"
          width={300}
          height={300}
          className="pixelated character-image"
        />
      </div>
    </div>
  );
}
