import Image from 'next/image';
import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

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
        <main className="flex-grow flex items-start justify-center pt-8">
          <Hero />
        </main>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <div className="animate-run">
          <Image
            src="/assets/character.png"
            alt="Running Barbie"
            width={200}
            height={200}
            className="pixelated"
          />
        </div>
      </div>
    </div>
  );
}
