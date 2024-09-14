import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";
import TokenSwapWidget from "../components/TokenSwapWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* ... (background styles remain unchanged) ... */}
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full p-4">
          <PixelNavigation />
        </header>
        <main className="flex-grow flex flex-col items-center justify-start pt-8">
          <Hero />
          <TokenSwapWidget />
        </main>
      </div>
    </div>
  );
}
