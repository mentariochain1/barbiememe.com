import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600000); // 10 минут в миллисекундах

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1000 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4">
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-tight mb-6"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          color: '#FFFFFF',
          textShadow: '4px 4px 0px #FF1493, -4px -4px 0px #00CED1, 0 0 10px #FF69B4',
          WebkitTextStroke: '3px #4B0082',
          letterSpacing: '0.05em',
          transform: 'skew(-5deg, -5deg) rotate(-2deg)',
          animation: 'neonFlicker 1.5s infinite alternate'
        }}
      >
        Добро пожаловать в
        <br />
        <span className="relative inline-block mt-2 mb-3 transform hover:scale-110 transition-transform duration-300">
          Мир $Barbie
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-6 text-white" 
         style={{ 
           fontFamily: '"Press Start 2P", cursive',
           textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #00CED1',
           letterSpacing: '0.05em',
         }}>
        Готовы погрузиться в яркий мир $Barbie? Это не просто токен, это стиль жизни!
        Пристегните ремни – эта поездка будет розовее ваших самых смелых фантазий!
      </p>
      <div className="bg-pink-200 rounded-lg p-4 mb-6">
        <p className="text-pink-800 font-bold">Текущая цена: $0.000042 | Держателей: 42,069</p>
      </div>
      <div className="mb-6">
        <p className="text-white text-xl font-bold">До запуска осталось:</p>
        <p className="text-3xl font-bold text-pink-300">{formatTime(timeLeft)}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        <button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #FF69B4'
          }}
        >
          КУПИТЬ $BARBIE
        </button>
        <button 
          className="px-8 py-4 bg-cyan-400 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #00CED1, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #40E0D0'
          }}
        >
          ПРИСОЕДИНИТЬСЯ К СООБЩЕСТВУ
        </button>
      </div>
    </div>
  );
};

export default Hero;