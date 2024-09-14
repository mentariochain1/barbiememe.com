"use client";

import React from 'react';

const TokenSwapWidget: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-12 bg-purple-900 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Token Swap Widget
      </h2>
      <div style={{ width: '100%', height: '400px', border: '2px solid #FF69B4' }}>
        <iframe
          src="https://app.stonfi.io/swap"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Stonfi Swap Widget"
        />
      </div>
    </div>
  );
};

export default TokenSwapWidget;