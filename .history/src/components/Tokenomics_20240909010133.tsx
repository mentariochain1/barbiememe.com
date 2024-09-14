"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TokenomicsItem {
  percentage: number;
  title: string;
  description: string;
  color: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    percentage: 35,
    title: "Liquidity",
    description: "Ensures stable trading and price",
    color: "bg-pink-400"
  },
  {
    percentage: 35,
    title: "Marketing",
    description: "Promotes $Barbie to the moon!",
    color: "bg-purple-400"
  },
  {
    percentage: 30,
    title: "Burn Program",
    description: "Reduces supply, increases value",
    color: "bg-blue-400"
  }
];

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 relative overflow-hidden bg-[#1c1c1e]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
        Tokenomics
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg pixel-border overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`${item.color} h-2`}></div>
              <div className="p-4">
                <h3 className="text-3xl font-bold text-pink-500 mb-2 pixel-font">{item.percentage}%</h3>
                <h4 className="text-xl font-semibold text-purple-700 mb-2 pixel-font">{item.title}</h4>
                <p className="text-sm text-gray-600 pixel-font">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg pixel-border inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-bold mb-4 pixel-font text-pink-500">LP LOCKED 🔒</p>
          <p className="text-3xl font-bold pixel-font text-purple-700">0% TAX 🎉</p>
        </motion.div>
      </div>
      <div className="mt-8 text-center">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg pixel-border inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl font-bold mb-2 pixel-font text-pink-500">Max Supply: 1,000,000,000 $BARBIE</p>
          <p className="text-xl font-bold pixel-font text-purple-700">Release: 10% monthly for 10 months</p>
        </motion.div>
      </div>
      <div className="mt-12 text-center">
        <motion.button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105 pixel-border pixel-font"
          style={{
            boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 0 20px #FF1493',
            textShadow: '2px 2px 0px #4B0082',
          }}
          onClick={() => {
            alert("Demo version of 'Collect $Barbie Tokens' mini-game launching soon!");
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Play Demo & Earn
        </motion.button>
      </div>
    </div>
  );
};

export default Tokenomics;