"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [holders, setHolders] = useState(42069);
  const [price, setPrice] = useState(0.000042);

  useEffect(() => {
    // Имитация обновления данных каждые 5 секунд
    const interval = setInterval(() => {
      setHolders(prev => prev + Math.floor(Math.random() * 10));
      setPrice(prev => prev + (Math.random() - 0.5) * 0.000001);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4 relative overflow-hidden">
      <motion.h1 
        className="sega-barbie-title mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="block text-2xl sm:text-3xl md:text-4xl mb-2">Welcome to</span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer"
              onClick={() => new Audio('/sounds/barbie-sound.mp3').play()}>
          $Barbie
        </span>
        <span className="block text-3xl sm:text-4xl md:text-5xl mt-2">
          World
        </span>
      </motion.h1>
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-4 text-white"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #00CED1',
          letterSpacing: '0.05em',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
        Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
      </motion.p>
      <motion.div 
        className="mb-8 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p>Current holders: {holders.toLocaleString()}</p>
        <p>Token price: ${price.toFixed(6)}</p>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-6">
        <motion.button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #FF69B4'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUY $BARBIE
        </motion.button>
        <motion.button 
          className="px-8 py-4 bg-cyan-400 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #00CED1, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #40E0D0'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JOIN COMMUNITY
        </motion.button>
      </div>
      {/* Плавающие иконки */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/barbie-coin.png"
          alt="Barbie Coin"
          className="absolute w-8 h-8"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;