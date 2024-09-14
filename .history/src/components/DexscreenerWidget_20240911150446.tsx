import React from 'react';

const DexscreenerWidget: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white sega-barbie-title">TON Token на Dexscreener</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://dexscreener.com/ethereum/0x582d872a1b094fc48f5de31d3b73f2d9be47def1?embed=1&theme=dark&trades=0&info=0"
          style={{width: '100%', height: '100%', border: '0'}}
          title="Dexscreener TON Token"
        ></iframe>
      </div>
    </div>
  );
};

export default DexscreenerWidget;