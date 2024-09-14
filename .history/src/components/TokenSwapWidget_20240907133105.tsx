"use client";

import React, { useEffect } from 'react';

const TokenSwapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.stonfi.io/static/js/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.stonfiWidget.init({
        containerSelector: '#stonfi-widget-container',
        openSelector: '#open-stonfi-widget',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-12 bg-purple-900 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Token Swap Widget
      </h2>
      <div id="stonfi-widget-container" style={{ width: '100%', height: '400px', border: '2px solid #FF69B4' }}>
        <button 
          id="open-stonfi-widget"
          className="w-full px-4 py-2 bg-pink-500 text-white font-bold rounded-md transition-all duration-300 hover:bg-pink-600"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 2px #FF1493, 0 0 0 4px #4B0082',
            textShadow: '1px 1px 0px #4B0082',
          }}
        >
          Open Swap Widget
        </button>
      </div>
    </div>
  );
};

export default TokenSwapWidget;