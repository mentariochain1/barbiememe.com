"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TokenomicsItem {
  percentage: number;
  title: string;
  description: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    percentage: 35,
    title: "Liquidity",
    description: "Ensures stable trading and price"
  },
  {
    percentage: 35,
    title: "Marketing",
    description: "Promotes $Barbie to the moon!"
  },
  {
    percentage: 30,
    title: "Burn Program",
    description: "Reduces supply, increases value"
  }
];

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
        Tokenomics
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 transform -translate-x-1/2 pixel-border"></div>
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
              <div className="bg-white p-4 rounded-lg shadow-lg pixel-border">
                <h3 className="text-xl font-bold text-pink-500 mb-2 pixel-font">{item.percentage}%</h3>
                <h4 className="text-lg font-semibold text-purple-700 mb-2 pixel-font">{item.title}</h4>
                <p className="text-sm text-gray-600 pixel-font">{item.description}</p>
              </div>
            </div>
            <div className="w-2/12 flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-white z-10 pixel-border"></div>
            </div>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg pixel-border inline-block">
          <p className="text-xl font-bold mb-4 pixel-font text-pink-500">LP LOCKED 🔒</p>
          <p className="text-2xl font-bold pixel-font text-purple-700">0% TAX 🎉</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg pixel-border inline-block">
          <p className="text-lg font-bold mb-2 pixel-font text-pink-500">Max Supply: 1,000,000,000 $BARBIE</p>
          <p className="text-lg font-bold pixel-font text-purple-700">Release: 10% monthly for 10 months</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button 
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105 pixel-border pixel-font"
          style={{
            boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 0 20px #FF1493',
            textShadow: '2px 2px 0px #4B0082',
          }}
          onClick={() => {
            alert("Demo version of 'Collect $Barbie Tokens' mini-game launching soon!");
          }}
        >
          Play Demo & Earn
        </button>
      </div>
    </div>
  );
};

export default Tokenomics;