import React from 'react';

const DexscreenerWidget: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <div className="relative">
        {/* Sega Barbie стилизованная рамка */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 p-4 rounded-lg transform -rotate-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-purple-500 rounded-lg transform rotate-2"></div>
        </div>
        
        {/* Заголовок */}
        <h2 className="relative z-10 text-3xl font-bold text-center mb-4 text-white sega-barbie-title" 
            style={{ 
              textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
              fontFamily: '"Press Start 2P", cursive'
            }}>
          $BARBIE Chart
        </h2>
        
        {/* Виджет Dexscreener */}
        <div className="relative z-10 aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg" 
             style={{ 
               boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
               border: '4px solid #FF69B4'
             }}>
          <iframe
            src="https://dexscreener.com/ethereum/0x582d872a1b094fc48f5de31d3b73f2d9be47def1?embed=1&theme=dark&trades=0&info=0"
            style={{width: '100%', height: '600px', border: '0'}}
            title="Dexscreener TON Token"
          />
        </div>
        
        {/* Виджет Pumpfan */}
        <div className="relative z-10 aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg" 
             style={{ 
               boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
               border: '4px solid #FF69B4'
             }}>
          <iframe
            src="https://pump.fun/3tvj78pDG9Dp32AYLuSqmfr1w9cQMGQ5wCsYQJYDpump"
            style={{width: '100%', height: '600px', border: '0'}}
            title="Pumpfan Chart"
          />
        </div>
      </div>
    </div>
  );
};

export default DexscreenerWidget;