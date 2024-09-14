"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GameSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 24 * 60 * 60));
    }, 1000);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType('mobile');
      } else if (window.innerWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div id="game-section" className="w-full py-16 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 sega-barbie-title text-pink-300 animate-pulse">
          Play, Win, and Slay!
        </h2>
        <div className="text-center mb-12">
          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-pink-100 pixel-font"
             style={{ 
               fontFamily: '"Press Start 2P", cursive',
               textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
               letterSpacing: '0.05em',
             }}>
            Ready to turn your $BARBIE dreams into a high-score reality? It's not just a game, it's a glittery adventure!
          </p>
          <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-pink-100 pixel-font"
             style={{ 
               fontFamily: '"Press Start 2P", cursive',
               textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
               letterSpacing: '0.05em',
             }}>
            Buckle up, buttercup – this leaderboard's gonna be pinker than your wildest fantasies! Top players snag exclusive $BARBIE tokens and NFTs. Don't be a plain Jane, be a $BARBIE boss!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/assets/barbie-game.png"
              alt="Barbie Game Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl pixelated"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-300 pixel-font mb-4"
               style={{ 
                 fontFamily: '"Press Start 2P", cursive',
                 textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
               }}>
              Next tournament starts in:
            </p>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white pixel-font animate-pulse"
                 style={{ 
                   fontFamily: '"Press Start 2P", cursive',
                   textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
                 }}>
              {formatTime(timeLeft)}
            </div>
            <button 
              className="mt-8 px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ 
                fontFamily: '"Press Start 2P", cursive',
                boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
                textShadow: '2px 2px 0px #4B0082',
                border: '4px solid #FF69B4'
              }}
            >
              Join Tournament
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;