import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-slide">
          <div className="flex flex-wrap text-pink-300 opacity-20" style={{ fontFamily: '"Press Start 2P", cursive' }}>
            {Array(100).fill('').map((_, i) => (
              <span key={i} className="text-2xl m-2 whitespace-nowrap">
                {i % 3 === 0 ? '$Barbie Just Run' : i % 3 === 1 ? '$Barbie Pump' : '$Barbie Moon'}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10">
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
