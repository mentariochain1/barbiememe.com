import PixelNavigation from "../components/PixelNavigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-800 via-pink-500 to-pink-300">
      <header className="w-full p-8">
        <PixelNavigation />
      </header>
      <main className="flex-grow">
        {/* Здесь будет основное содержимое страницы */}
      </main>
    </div>
  );
}
