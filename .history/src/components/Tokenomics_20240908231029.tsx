"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart } from 'react-minimal-pie-chart';
import Tooltip from './Tooltip';

interface TokenomicsItem {
  percentage: number;
  title: string;
  description: string;
  icon: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    percentage: 35,
    title: "Liquidity",
    description: "Ensures stable trading and price",
    icon: "🌊"
  },
  {
    percentage: 35,
    title: "Marketing",
    description: "Promotes $Barbie to the moon!",
    icon: "🚀"
  },
  {
    percentage: 30,
    title: "Burn Program",
    description: "Reduces supply, increases value",
    icon: "🔥"
  }
];

const Tokenomics: React.FC = () => {
  const [, setActiveIndex] = useState<number | undefined>(undefined);

  const chartData = tokenomicsData.map((item, index) => ({
    title: item.title,
    value: item.percentage,
    color: ['#FF69B4', '#4B0082', '#00CED1'][index]
  }));

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Анимированный пиксельный фон */}
        <div className="pixel-background"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
          Tokenomics
        </h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <PieChart
                data={chartData}
                lineWidth={60}
                paddingAngle={5}
                rounded
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelStyle={{ fontSize: '5px', fill: '#ffffff' }}
                labelPosition={75}
                animate
                onMouseOver={(_, index) => setActiveIndex(index)}
                onMouseOut={() => setActiveIndex(undefined)}
              />
            </div>
            <div className="flex flex-col justify-center">
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg p-4 mb-4 text-center transform transition-all duration-300"
                  style={{
                    boxShadow: '0 0 10px #FF69B4, 0 0 20px #4B0082',
                    border: '4px solid #FF1493'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Tooltip content={item.description}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-pink-500">{item.percentage}%</h3>
                    <p className="text-purple-700 font-bold">{item.title}</p>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center text-white mb-8">
            <p className="text-xl font-bold mb-4">LP LOCKED 🔒</p>
            <p className="text-2xl font-bold text-green-300">0% TAX 🎉</p>
          </div>
          <div className="text-center text-white">
            <p className="text-xl font-bold mb-4">Max Supply: 1,000,000,000 $BARBIE</p>
            <p className="text-xl font-bold">Release Schedule: 10% monthly for 10 months</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button 
            className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105 pixel-border"
            style={{
              fontFamily: '"Press Start 2P", cursive',
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
    </div>
  );
};

export default Tokenomics;