"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const buttonStyle = {
    fontFamily: '"Press Start 2P", cursive',
    boxShadow: '0 0 0 2px #8A2BE2, 0 0 0 4px #4B0082',
    textShadow: '1px 1px 0px #4B0082',
    border: '2px solid #9370DB'
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full min-h-screen pt-20 md:pt-24 px-4 pb-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image
        src="/assets/newbarbie.png"
        alt="Barbie on the phone"
        width={700}
        height={700}
        className={`pixelated absolute ${deviceType === 'mobile' ? 'left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4 scale-75 opacity-30' : 'left-0 top-1/2 -translate-y-1/2'} transition-all duration-300`}
        style={{ maxWidth: 'none' }}
      />
      <motion.div className="relative z-10 text-center" variants={itemVariants}>
        <h1 className="mb-6 animate-fade-in">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-white sega-barbie-title">Welcome to</span>
          <span 
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl cursor-pointer relative text-pink-300 hover:text-pink-200 transition-colors duration-300 sega-barbie-title"
            onClick={() => new Audio('/sounds/barbie-sound.mp3').play()}
            style={{
              textShadow: '4px 4px 0px #FF1493, -4px -4px 0px #4B0082, 0 0 20px #FF69B4',
              WebkitTextStroke: '2px #FF1493',
              letterSpacing: '0.05em',
              transform: 'skew(-5deg)',
            }}
          >
            $Barbie
          </span>
          <span 
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-purple-300 sega-barbie-title"
            style={{
              textShadow: '2px 2px 0px #8A2BE2, -2px -2px 0px #4B0082',
              letterSpacing: '0.1em',
            }}
          >
            World
          </span>
        </h1>
      </motion.div>
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white animate-fade-in-delay z-10"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
          letterSpacing: '0.05em',
        }}
        variants={itemVariants}
      >
        Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
        Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
      </motion.p>
      <motion.div className="flex flex-col items-center sm:flex-row justify-center gap-6 z-10" variants={itemVariants}>
        <Link href="/avatar-generator">
          <button 
            className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Create Your Avatar
          </button>
        </Link>
        <Link href="#game-section">
          <button 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Play & Win $BARBIE
          </button>
        </Link>
      </motion.div>
      <motion.div className={`flex ${deviceType === 'mobile' ? 'mt-6' : 'mt-8'} z-10`} variants={itemVariants}>
        <a href="https://t.me/BarbiePortal" target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full h-full bg-blue-500 text-white p-4 rounded-l-md hover:bg-blue-600 transition-colors duration-300" style={buttonStyle}>
            <FaTelegram size={24} />
          </button>
        </a>
        <a href="https://x.com/BarbieMemeSol" target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full h-full bg-sky-500 text-white p-4 hover:bg-sky-600 transition-colors duration-300" style={buttonStyle}>
            <FaXTwitter size={24} />
          </button>
        </a>
        <a href="https://dex.guru/token/your_token_address" target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full h-full bg-green-500 text-white p-4 hover:bg-green-600 transition-colors duration-300" style={buttonStyle}>
            <span className="font-bold text-xs">DEX</span>
          </button>
        </a>
        <a href="https://t.me/barbie_runner_bot/barbierunner" target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full h-full bg-pink-500 text-white p-4 rounded-r-md hover:bg-pink-600 transition-colors duration-300" style={buttonStyle}>
            <span className="font-bold text-xs">PLAY</span>
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;