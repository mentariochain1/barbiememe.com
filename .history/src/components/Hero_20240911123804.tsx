"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-20 md:pt-24 px-4 pb-16 relative overflow-hidden bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-600">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <Image
        src="/assets/newbarbie.png"
        alt="Barbie on the phone"
        width={700}
        height={700}
        className={`pixelated absolute ${deviceType === 'mobile' ? 'left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4 scale-75 opacity-30' : 'left-0 top-1/2 -translate-y-1/2'} transition-all duration-300`}
        style={{ maxWidth: 'none' }}
      />
      <div className="relative z-10 text-center">
        <h1 className="sega-barbie-title mb-6 animate-fade-in">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-white">Welcome to</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl cursor-pointer relative text-pink-300 hover:text-pink-200 transition-colors duration-300"
                onClick={() => new Audio('/sounds/barbie-sound.mp3').play()}>
            $Barbie
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-purple-300">
            World
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white animate-fade-in-delay"
           style={{ 
             fontFamily: '"Press Start 2P", cursive',
             textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
             letterSpacing: '0.05em',
           }}>
          Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
          Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/avatar-generator">
            <button 
              className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-neon-pink"
              style={{ 
                fontFamily: '"Press Start 2P", cursive',
                textShadow: '2px 2px 0px #4B0082',
              }}
            >
              Create Your Avatar
            </button>
          </Link>
          <Link href="#game-section">
            <button 
              className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-neon-purple"
              style={{ 
                fontFamily: '"Press Start 2P", cursive',
                textShadow: '2px 2px 0px #4B0082',
              }}
            >
              Play & Win $BARBIE
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;