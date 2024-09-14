import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-slide" style={{ fontSize: '24px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
          {Array(20).fill('').map((_, i) => (
            <div key={i} className="mb-8">
              $Barbie Just Run &nbsp;&nbsp;&nbsp; $Barbie Pump &nbsp;&nbsp;&nbsp; $Barbie Moon &nbsp;&nbsp;&nbsp;
              $Barbie Just Run &nbsp;&nbsp;&nbsp; $Barbie Pump &nbsp;&nbsp;&nbsp; $Barbie Moon &nbsp;&nbsp;&nbsp;
            </div>
          ))}
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
