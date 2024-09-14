import PixelNavigation from "../components/PixelNavigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="w-full p-6">
        <PixelNavigation />
      </header>
      <main className="flex-grow">
        {/* Здесь будет основное содержимое страницы */}
      </main>
    </div>
  );
}
