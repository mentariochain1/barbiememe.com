import React from 'react';

const DexscreenerWidget: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <div className="aspect-w-16 aspect-h-12"> {/* Изменено с aspect-h-9 на aspect-h-12 для увеличения высоты */}
        <iframe
          src="https://dexscreener.com/ethereum/0x582d872a1b094fc48f5de31d3b73f2d9be47def1?embed=1&theme=dark&trades=0&info=0"
          style={{width: '100%', height: '600px', border: '0'}} {/* Установлена фиксированная высота в 600px */}
          title="Dexscreener TON Token"
        ></iframe>
      </div>
    </div>
  );
};

export default DexscreenerWidget;