import Image from 'next/image';
import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background styles remain unchanged */}
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full p-4">
          <PixelNavigation />
        </header>
        <main className="flex-grow flex items-start justify-center pt-8">
          <Hero />
        </main>
      </div>
      <div className="character-image absolute bottom-0 right-0 z-20">
        <Image
          src="/assets/character.png"
          alt="Barbie Character"
          width={300}
          height={300}
          className="pixelated"
        />
      </div>
    </div>
  );
}
