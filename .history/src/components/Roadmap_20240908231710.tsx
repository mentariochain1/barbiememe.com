"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Launch",
    description: "Token launch and initial marketing"
  },
  {
    phase: "Phase 2",
    title: "DApp",
    description: "Barbie's Dreamhouse DApp for staking"
  },
  {
    phase: "Phase 3",
    title: "NFTs",
    description: "Exclusive Barbie-themed NFT collection"
  },
  {
    phase: "Phase 4",
    title: "Metaverse",
    description: "Barbie's virtual world launch"
  },
  {
    phase: "Phase 5",
    title: "Expansion",
    description: "Cross-chain $BARBIE expansion"
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
        Roadmap
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-pink-400 transform -translate-x-1/2"></div>
        {roadmapData.map((item, index) => (
          <motion.div
            key={item.phase}
            className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
              <h3 className="text-xl font-bold text-pink-500 mb-2">{item.phase}</h3>
              <h4 className="text-lg font-semibold text-purple-700 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white z-10"></div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
          </motion.div>
        ))}
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