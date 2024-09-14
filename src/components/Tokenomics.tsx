"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TokenomicsItem {
  percentage: number;
  title: string;
  description: string;
  color: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    percentage: 30,
    title: "Liquidity",
    description: "Ensures stable trading and price",
    color: "bg-pink-400"
  },
  {
    percentage: 50,
    title: "Marketing",
    description: "Promotes $Barbie to the moon!",
    color: "bg-purple-400"
  },
  {
    percentage: 20,
    title: "Big Burn",
    description: "Reduces supply, increases value",
    color: "bg-blue-400"
  }
];

const Tokenomics: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(3);
  const totalMonths = 10;
  const progressPercentage = (currentMonth / totalMonths) * 100;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="w-full py-12 px-4 md:py-16 md:px-8 relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 md:mb-12 sega-barbie-title text-pink-500 animate-pulse">
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg pixel-border overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`${item.color} h-2`}></div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 pixel-font">{item.percentage}%</h3>
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-700 pixel-font">{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pixel-font">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-6 mb-8 md:mb-12">
          <motion.div 
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg pixel-border"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl sm:text-2xl font-bold mb-2 pixel-font text-pink-500">LP BURNT 🔥</p>
            <p className="text-2xl sm:text-3xl font-bold pixel-font text-purple-700">0% TAX 🎉</p>
          </motion.div>
          <motion.div 
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg pixel-border"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg sm:text-xl font-bold mb-2 pixel-font text-pink-500">Max Supply:</p>
            <p className="text-xl sm:text-2xl font-bold mb-3 pixel-font text-purple-700">1,000,000,000 $BARBIE</p>
            <p className="text-base sm:text-lg font-bold pixel-font text-pink-500">Release:</p>
            <p className="text-lg sm:text-xl font-bold pixel-font text-purple-700">10% monthly for 10 months</p>
          </motion.div>
        </div>
        <motion.div
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg pixel-border mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg sm:text-xl font-bold mb-4 pixel-font text-pink-500">Token Release Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-4 sm:h-6 pixel-border overflow-hidden mb-3">
            <motion.div
              className="bg-gradient-to-r from-pink-400 to-purple-500 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
          <p className="text-base sm:text-lg font-bold pixel-font text-purple-700">
            {currentMonth} / {totalMonths} months completed
          </p>
          {!isMobile && (
            <div className="mt-4 flex justify-center gap-4">
              <button 
                className="px-2 sm:px-3 py-1 sm:py-2 bg-pink-500 text-white rounded-md pixel-font text-xs sm:text-sm hover:bg-pink-600 transition-colors duration-300"
                onClick={() => setCurrentMonth(prev => Math.max(0, prev - 1))}
              >
                Previous
              </button>
              <button 
                className="px-2 sm:px-3 py-1 sm:py-2 bg-purple-500 text-white rounded-md pixel-font text-xs sm:text-sm hover:bg-purple-600 transition-colors duration-300"
                onClick={() => setCurrentMonth(prev => Math.min(totalMonths, prev + 1))}
              >
                Next
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Tokenomics;