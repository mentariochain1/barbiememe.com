import PixelNavigation from "../components/PixelNavigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4">
        <PixelNavigation />
      </header>
      <main className="flex-grow">
        {/* Здесь будет основное содержимое страницы */}
      </main>
    </div>
  );
}
