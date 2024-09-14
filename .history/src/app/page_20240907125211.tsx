import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-800 via-pink-500 to-pink-300">
      <header className="w-full p-8">
        <PixelNavigation />
      </header>
      <Hero />
      <main className="flex-grow">
        {/* Здесь будет остальное содержимое страницы */}
      </main>
    </div>
  );
}
