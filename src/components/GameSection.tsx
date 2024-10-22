"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GameSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const startDate = new Date('2024-09-15T04:00:00+03:00'); // 15 сентября 2024 года, 4:00 по московскому времени
    const endDate = new Date('2024-09-16T04:00:00+03:00'); // 16 сентября 2024 года, 4:00 по московскому времени
    
    const updateTimer = () => {
      const now = new Date();
      if (now < startDate) {
        // Если текущее время меньше времени начала, показываем время до начала
        setTimeLeft(Math.floor((startDate.getTime() - now.getTime()) / 1000));
      } else if (now < endDate) {
        // Если текущее время между началом и концом, показываем оставшееся время
        setTimeLeft(Math.floor((endDate.getTime() - now.getTime()) / 1000));
      } else {
        // Если время вышло, показываем 0
        setTimeLeft(0);
      }
    };

    updateTimer(); // Вызываем сразу, чтобы установить начальное значение
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div
      id="game-section"
      className="w-full py-16 px-4 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: 'linear-gradient(45deg, #0088CC, #FF69B4, #0088CC)',
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 sega-barbie-title text-white animate-pulse"
          variants={itemVariants}
          style={{ 
            textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
            fontFamily: '"Press Start 2P", cursive'
          }}
        >
          Play, Score, and Slay for $BARBIE!
        </motion.h2>
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white pixel-font">
            Step into the glittery arena, dolls! It&apos;s time to turn those $BARBIE dreams into a high-score reality!
          </p>
          <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white pixel-font">
            Rack up those points like they&apos;re designer shoes! The player with the highest score doesn&apos;t just win – they strut away with a fabulous $BARBIE jackpot! Are you ready to be the Barbie boss of the leaderboard?
          </p>
        </motion.div>
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white pixel-font mb-4">
            Next $BARBIE bonanza starts in:
          </p>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white pixel-font animate-pulse mb-8">
            {formatTime(timeLeft)}
          </div>
          <a 
            href="https://t.me/barbie_runner_bot/barbierunner" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button 
              className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110 pixel-font"
              style={{ 
                boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
                textShadow: '2px 2px 0px #4B0082',
                border: '4px solid #FF69B4'
              }}
            >
              Join the $BARBIE Bash!
            </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameSection;
