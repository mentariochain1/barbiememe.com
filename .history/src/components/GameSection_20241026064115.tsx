"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GameSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const endDate = new Date('2024-10-29T22:00:00+03:00'); // 29 октября 2024 года, 22:00 по московскому времени
    
    const updateTimer = () => {
      const now = new Date();
      if (now < endDate) {
        setTimeLeft(Math.floor((endDate.getTime() - now.getTime()) / 1000));
      } else {
        setTimeLeft(0);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-8 text-white pixel-font">
          $BARBIE Game Event
        </h2>
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h3 className="text-3xl md:text-4xl text-center font-bold mb-4 text-pink-500 pixel-font">
            Prize Pool: 150 TON
          </h3>
          <p className="text-xl text-center text-gray-700 pixel-font mb-6">
            Compete in our Barbie Runner game and win big!
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 pixel-font">Event Ends In</p>
              <p className="text-2xl font-bold text-pink-500 pixel-font">{formatTime(timeLeft)}</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-white pixel-font mb-4">
            Play, score, and climb the leaderboard to win your share of the 150 TON prize pool!
          </p>
          <p className="text-lg text-white pixel-font">
            The higher your score, the bigger your potential winnings. Are you ready to become the Barbie champion?
          </p>
        </div>
        <div className="text-center">
          <a 
            href="https://t.me/barbie_runner_bot/barbierunner" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105 pixel-font"
          >
            Play Barbie Runner Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
