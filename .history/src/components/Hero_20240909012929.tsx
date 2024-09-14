"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 -mt-4 -mr-4 z-10">
        <Image
          src="/assets/phonebarbie.png"
          alt="Barbie on the phone"
          width={160}
          height={160}
          className="pixelated animate-float"
        />
      </div>
      <h1 className="sega-barbie-title mb-6 text-center animate-fade-in">
        <span className="block text-2xl sm:text-3xl md:text-4xl mb-2">Welcome to</span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer"
              onClick={() => new Audio('/sounds/barbie-sound.mp3').play()}>
          $Barbie
        </span>
        <span className="block text-3xl sm:text-4xl md:text-5xl mt-2">
          World
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 text-white animate-fade-in-delay"
         style={{ 
           fontFamily: '"Press Start 2P", cursive',
           textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
           letterSpacing: '0.05em',
         }}>
        Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
        Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #FF69B4'
          }}
        >
          Play in TMA
        </button>
        <button 
          className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #9370DB'
          }}
        >
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  );
};

export default Hero;