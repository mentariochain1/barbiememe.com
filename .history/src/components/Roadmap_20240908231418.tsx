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
    title: "Launch & Community Building",
    description: "Token launch, community growth, and initial marketing push",
    icon: "🚀"
  },
  {
    phase: "Phase 2",
    title: "Barbie's Dreamhouse DApp",
    description: "Launch of our first decentralized application for token staking",
    icon: "🏠"
  },
  {
    phase: "Phase 3",
    title: "NFT Collection",
    description: "Release of exclusive Barbie-themed NFT collection",
    icon: "🎨"
  },
  {
    phase: "Phase 4",
    title: "Barbie's Metaverse",
    description: "Development and launch of Barbie's virtual world",
    icon: "🌐"
  },
  {
    phase: "Phase 5",
    title: "Cross-Chain Expansion",
    description: "Expanding $BARBIE to other blockchain networks",
    icon: "🔗"
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="pixel-background"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
          Roadmap
        </h2>
        <div className="max-w-4xl mx-auto">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-6 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                  <h4 className="text-lg font-semibold text-pink-200">{item.title}</h4>
                </div>
              </div>
              <p className="text-white">{item.description}</p>
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
    </div>
  );
};

export default Roadmap;