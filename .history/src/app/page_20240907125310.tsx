import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-pink-400 to-purple-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/barbie-pattern.png')] opacity-10 z-0"></div>
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
