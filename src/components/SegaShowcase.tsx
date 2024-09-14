"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface GameItem {
  id: number;
  title: string;
  image: string;
  description: string;
  barbieConnection: string;
}

const games: GameItem[] = [
  { 
    id: 1, 
    title: "Sample 1", 
    image: "/assets/sample1.png",
    description: "Barbie's Fashion Adventure",
    barbieConnection: "Customize your $BARBIE NFT with unique fashion items"
  },
  { 
    id: 2, 
    title: "Sample 2", 
    image: "/assets/sample2.png",
    description: "Barbie's Dream House Builder",
    barbieConnection: "Build and trade virtual Barbie houses as NFTs"
  },
  { 
    id: 3, 
    title: "Sample 3", 
    image: "/assets/sample3.png",
    description: "Barbie's Glam Salon",
    barbieConnection: "Earn $BARBIE tokens by styling virtual clients"
  },
];

const SegaShowcase: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [hoveredGame, setHoveredGame] = useState<GameItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="w-full py-16 px-4 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-12 sega-barbie-title text-pink-300 animate-pulse"
          variants={itemVariants}
        >
          Barbie Game Showcase
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-6 mb-12" variants={itemVariants}>
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-pink-200 border-4 border-[#FF1493] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 relative shadow-neon-pink"
              onClick={() => setSelectedGame(game)}
              onMouseEnter={() => setHoveredGame(game)}
              onMouseLeave={() => setHoveredGame(null)}
              variants={itemVariants}
            >
              <Image src={game.image} alt={game.title} layout="fill" objectFit="cover" className="pixelated" />
              {(hoveredGame === game || !isLargeScreen) && (
                <div className="absolute inset-0 bg-pink-500 bg-opacity-75 flex items-center justify-center p-4">
                  <p className="text-white text-xs sm:text-sm md:text-base text-center pixel-font">{game.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        {selectedGame && (
          <motion.div
            className="fixed inset-0 bg-pink-300 bg-opacity-75 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#FF69B4] p-6 rounded-lg border-4 border-[#FF1493] max-w-lg w-full shadow-neon-pink">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-6 text-center pixel-font">
                {selectedGame.title}
              </h3>
              <div className="relative w-full h-64 sm:h-80 mb-6">
                <Image src={selectedGame.image} alt={selectedGame.title} layout="fill" objectFit="contain" className="pixelated" />
              </div>
              <p className="text-white mb-6 text-center pixel-font">{selectedGame.barbieConnection}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="w-full px-4 py-3 bg-[#FF1493] text-white font-bold rounded-md transition-all duration-300 hover:bg-[#FF69B4] shadow-neon-pink pixel-font"
                  onClick={() => {
                    alert(`Playing ${selectedGame.title}! Win $BARBIE tokens!`);
                  }}
                >
                  Play Now
                </button>
                <button
                  className="w-full px-4 py-3 bg-[#8A2BE2] text-white font-bold rounded-md transition-all duration-300 hover:bg-[#9370DB] shadow-neon-purple pixel-font"
                  onClick={() => setSelectedGame(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link href="/avatar-generator">
            <button
              className="px-8 py-4 bg-[#FF1493] text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 pixel-font shadow-neon-pink animate-pulse"
              style={{
                boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
                textShadow: '2px 2px 0px #4B0082',
                border: '4px solid #FF69B4'
              }}
            >
              Create Your Own $BARBIE Avatar
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SegaShowcase;