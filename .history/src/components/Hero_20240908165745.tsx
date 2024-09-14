"use client";

import React from 'react';

const Hero: React.FC = () => {
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
        Welcome to
        <br />
        <span className="relative inline-block mt-2 mb-3 transform hover:scale-110 transition-transform duration-300">
          $Barbie World
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 text-white" 
         style={{ 
           fontFamily: '"Press Start 2P", cursive',
           textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #00CED1',
           letterSpacing: '0.05em',
         }}>
        Ready to dive into the wild world of $Barbie? It's not just a token, it's a lifestyle. 
        Buckle up, buttercup – this ride's gonna be pinker than your wildest dreams!
      </p>
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
          BUY $BARBIE
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
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  );
};

export default Hero;