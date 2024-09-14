import Image from 'next/image';
import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';
import { useState } from 'react';

const SegaShowcase = dynamic(() => import('../components/SegaShowcase'), { ssr: false });

export default function Home() {
  const [isCalmBackground, setIsCalmBackground] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className={`absolute inset-0 z-0 transition-all duration-500 ${isCalmBackground ? 'bg-pink-100' : ''}`}>
        {!isCalmBackground && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 via-pink-500 via-rose-400 to-fuchsia-500 animate-gradient"></div>
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
          </>
        )}
      </div>
      {[...Array(10)].map((_, i) => (
        <Image
          key={i}
          src={i % 2 === 0 ? "/assets/barbie-icon.png" : "/assets/crypto-icon.png"}
          alt="Floating Icon"
          width={30}
          height={30}
          className="absolute animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full p-4">
          <PixelNavigation />
        </header>
        <main className="flex-grow flex flex-col items-center justify-start px-4 pt-8">
          <Hero />
          <div className="w-full max-w-4xl mt-24 mb-32">
            <SegaShowcase />
          </div>
        </main>
        <Footer />
      </div>
      <button
        className="fixed bottom-4 right-4 px-4 py-2 bg-white text-pink-500 rounded-full shadow-lg"
        onClick={() => setIsCalmBackground(!isCalmBackground)}
      >
        {isCalmBackground ? "Energetic Mode" : "Calm Mode"}
      </button>
    </div>
  );
}
