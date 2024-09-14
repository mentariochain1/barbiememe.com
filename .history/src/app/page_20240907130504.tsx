import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800"></div>
        <div className="absolute inset-0 opacity-30" style={{
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
      <div className="relative z-10 min-h-screen">
        <header className="w-full p-8">
          <PixelNavigation />
        </header>
        <Hero />
        <main className="flex-grow">
          {/* Здесь будет остальное содержимое страницы */}
        </main>
      </div>
    </div>
  );
}
