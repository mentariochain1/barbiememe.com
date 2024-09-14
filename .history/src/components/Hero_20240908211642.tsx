"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4">
      <h1 className="sega-barbie-title mb-6 text-center pixel-font">
        <span className="block transform -rotate-6 scale-y-125 origin-left">Welcome to</span>
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 mb-3 transform rotate-6 scale-y-125 origin-right">
          $Barbie World
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 text-white pixel-font" 
         style={{ 
           textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #00CED1',
           letterSpacing: '0.05em',
         }}>
        Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
        Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110 pixel-font"
          style={{ 
            boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #FF69B4'
          }}
        >
          BUY $BARBIE
        </button>
        <button 
          className="px-8 py-4 bg-cyan-400 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110 pixel-font"
          style={{ 
            boxShadow: '0 0 0 4px #00CED1, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #40E0D0'
          }}
        >
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  );
};

export default Hero;