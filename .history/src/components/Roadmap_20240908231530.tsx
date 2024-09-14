"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Launch",
    description: "Token launch and initial marketing",
    icon: "🚀"
  },
  {
    phase: "Phase 2",
    title: "DApp",
    description: "Barbie's Dreamhouse DApp for staking",
    icon: "🏠"
  },
  {
    phase: "Phase 3",
    title: "NFTs",
    description: "Exclusive Barbie-themed NFT collection",
    icon: "🎨"
  },
  {
    phase: "Phase 4",
    title: "Metaverse",
    description: "Barbie's virtual world launch",
    icon: "🌐"
  },
  {
    phase: "Phase 5",
    title: "Expansion",
    description: "Cross-chain $BARBIE expansion",
    icon: "🔗"
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
        Roadmap
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-pink-200 opacity-50 z-0"></div>
        <div className="relative z-10 grid grid-cols-5 gap-1 p-2 bg-pink-300">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              className="bg-white p-2 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-sm font-bold text-pink-500">{item.phase}</h3>
              <h4 className="text-xs font-semibold text-purple-700">{item.title}</h4>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              className="bg-white p-4 rounded-lg shadow-lg border-4 border-pink-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-lg font-bold text-pink-500 mb-2">{item.phase}: {item.title}</h3>
              <p className="text-sm text-purple-700">{item.description}</p>
            </motion.div>
          ))}
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
            alert("Join our community to stay updated on our roadmap progress!");
          }}
        >
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Roadmap;