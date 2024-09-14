import PixelNavigation from "../components/PixelNavigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-500 via-orange-400 to-black">
      <header className="w-full p-8">
        <PixelNavigation />
      </header>
      <main className="flex-grow">
        {/* Здесь будет основное содержимое страницы */}
      </main>
    </div>
  );
}
