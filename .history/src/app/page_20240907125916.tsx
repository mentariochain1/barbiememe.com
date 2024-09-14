import PixelNavigation from "../components/PixelNavigation";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-[400%] h-[400%] animate-slide-diagonal" 
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            fontSize: '16px',
            lineHeight: '2',
            whiteSpace: 'nowrap',
            transform: 'rotate(-45deg) translateY(-75%) translateX(-50%)'
          }}
        >
          {Array(100).fill('').map((_, i) => (
            <div key={i} className="mb-4">
              $Barbie Just Run &nbsp;&nbsp; $Barbie Pump &nbsp;&nbsp; $Barbie Moon &nbsp;&nbsp;
              $Barbie Just Run &nbsp;&nbsp; $Barbie Pump &nbsp;&nbsp; $Barbie Moon &nbsp;&nbsp;
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
