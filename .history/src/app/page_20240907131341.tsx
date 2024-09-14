import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, #FF69B4 1px, transparent 1px),
            linear-gradient(to bottom, #FF69B4 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#FF1493 1px, transparent 1px)`,
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
    </div>
  );
}
