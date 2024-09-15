"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1: Launch & Liquidity",
    title: "Raydium Listing",
    description: "Initial DEX offering on Raydium, establishing strong liquidity pool for $BARBIE",
    icon: "🚀"
  },
  {
    phase: "Phase 2: Community Engagement",
    title: "Barbie Runner Giveaways",
    description: "Launch of Barbie Runner game with exclusive token giveaways to early adopters",
    icon: "🎮"
  },
  {
    phase: "Phase 3: Marketing Blitz",
    title: "Massive Marketing Campaign",
    description: "Aggressive marketing push including influencer partnerships, AMAs, and viral campaigns",
    icon: "📣"
  },
  {
    phase: "Phase 4: NFT Integration",
    title: "Barbie Runner NFT Collection",
    description: "Release of limited edition Barbie Runner NFTs with in-game utilities",
    icon: "🎨"
  },
  {
    phase: "Phase 5: Exchange Expansion",
    title: "Major Exchange Listings",
    description: "Listing on top-tier centralized exchanges to increase liquidity and accessibility",
    icon: "📈"
  }
];

const Roadmap: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" ref={roadmapRef}>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <Image
        src="/assets/roadmapbarbie.png"
        alt="Roadmap Barbie"
        width={550}
        height={550}
        className={`pixelated absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isMobile ? 'opacity-10 scale-75' : 'opacity-30'}`}
        style={{ maxWidth: 'none' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-12 md:mb-16 sega-barbie-title text-pink-500 animate-pulse">
          Barbie Runner Roadmap
        </h2>
        <div className="relative">
          <motion.div 
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 transform sm:-translate-x-1/2"
            style={{ scaleY, originY: 0 }}
          />
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              className={`flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`w-full sm:w-5/12 mb-4 sm:mb-0 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg pixel-border transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-pink-500 pixel-font">{item.phase}</h3>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2 pixel-font">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 pixel-font">{item.description}</p>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-2/12 flex justify-center">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-white z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                />
              </div>
              <div className={`hidden sm:block sm:w-5/12 ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center relative z-10">
        <a 
          href="https://t.me/BarbiePortal" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105 pixel-border pixel-font shadow-neon-pink animate-pulse"
            style={{
              boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 0 20px #FF1493',
              textShadow: '2px 2px 0px #4B0082',
            }}
          >
            Join Barbie Runner Community
          </button>
        </a>
      </div>
    </div>
  );
};

export default Roadmap;