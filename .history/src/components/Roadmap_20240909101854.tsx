"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden" ref={roadmapRef}>
      <Image
        src="/assets/roadmapbarbie.png"
        alt="Roadmap Barbie"
        width={550}
        height={550}
        className={`pixelated absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isMobile ? 'opacity-10' : ''}`}
        style={{ maxWidth: 'none' }}
      />
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title relative z-10">
        Roadmap
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500"
          style={{ scaleY, originY: 0 }}
        />
        {roadmapData.map((item, index) => {
          const itemProgress = useTransform(scrollYProgress, 
            [index / roadmapData.length, (index + 1) / roadmapData.length], 
            [0, 1]
          );
          const itemOpacity = useTransform(itemProgress, [0, 0.5, 1], [0.3, 1, 1]);
          const itemScale = useTransform(itemProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
          const circleColor = useTransform(itemProgress, [0, 0.5, 1], ["#CBD5E0", "#FED7E2", "#FD4D9E"]);

          return (
            <motion.div
              key={item.phase}
              className="flex flex-col sm:flex-row items-start sm:items-center mb-12 relative"
              style={{ opacity: itemOpacity }}
            >
              <div className="w-8 h-8 absolute left-0 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <motion.div 
                  className="w-4 h-4 sm:w-8 sm:h-8 rounded-full border-4 border-white z-10"
                  style={{ 
                    backgroundColor: circleColor,
                    boxShadow: useTransform(itemProgress, v => `0 0 ${v * 20}px ${v * 10}px #FD4D9E`)
                  }}
                />
              </div>
              <div className="ml-12 sm:ml-0 sm:w-5/12 sm:pr-8 sm:text-right">
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-lg pixel-border mb-4 sm:mb-0"
                  style={{ scale: itemScale }}
                >
                  <h3 className="text-xl font-bold text-pink-500 mb-2 pixel-font">{item.phase}</h3>
                  <h4 className="text-lg font-semibold text-purple-700 mb-2 pixel-font">{item.title}</h4>
                  <p className="text-sm text-gray-600 pixel-font">{item.description}</p>
                </motion.div>
              </div>
              <div className="hidden sm:block sm:w-2/12" />
              <div className="hidden sm:block sm:w-5/12" />
            </motion.div>
          );
        })}
      </div>
      <div className="mt-12 text-center relative z-10">
        <Link href="#community">
          <button 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ 
              fontFamily: '"Press Start 2P", cursive',
              boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
              textShadow: '2px 2px 0px #4B0082',
              border: '4px solid #9370DB'
            }}
          >
            JOIN COMMUNITY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;