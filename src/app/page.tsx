import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Tokenomics from "../components/Tokenomics";
import dynamic from 'next/dynamic';
import BackgroundSwitcher from '../components/BackgroundSwitcher';
import Roadmap from '../components/Roadmap';
import GameSection from '../components/GameSection';
import DexscreenerWidget from '../components/DexscreenerWidget';

const SegaShowcase = dynamic(() => import('../components/SegaShowcase'), { ssr: false });

export default function Home() {
  return (
    <BackgroundSwitcher>
      <div className="min-h-screen flex flex-col relative">
        <div className="absolute inset-0 z-0">
          {/* Удалите или закомментируйте старый градиент */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 via-pink-500 via-rose-400 to-fuchsia-500 animate-gradient"></div> */}
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
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 animate-float ${i % 2 === 0 ? 'barbie-icon' : 'crypto-icon'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="w-full">
            <PixelNavigation />
          </header>
          <main className="flex-grow flex flex-col items-center justify-start px-4">
            <div id="hero-section" className="w-full pt-20">
              <Hero />
            </div>
            <DexscreenerWidget />
            <div id="game-section" className="w-full pt-20">
              <GameSection />
            </div>
            <div className="w-full max-w-4xl mt-24 mb-32 pt-20">
              <SegaShowcase />
            </div>
            <div id="tokenomics-section" className="w-full max-w-4xl mb-32 pt-20">
              <Tokenomics />
            </div>
            <div id="roadmap-section" className="w-full pt-20">
              <Roadmap />
            </div>
          </main>
          <div id="footer-section">
            <Footer />
          </div>
        </div>
      </div>
    </BackgroundSwitcher>
  );
}
