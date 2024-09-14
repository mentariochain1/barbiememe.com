import Image from 'next/image';
import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";
import SegaShowcase from "../components/SegaShowcase";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
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
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full p-4">
          <PixelNavigation />
        </header>
        <main className="flex-grow flex flex-col items-start justify-center pt-8">
          <Hero />
          <SegaShowcase />
        </main>
      </div>
      <div className="character-container absolute bottom-0 right-0 z-20">
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
