"use client";

import React, { useState } from 'react';
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
    title: "Sonic", 
    image: "/assets/sonic.png",
    description: "Speed through levels and collect rings",
    barbieConnection: "Fast transactions on our blockchain"
  },
  { 
    id: 2, 
    title: "Streets of Rage", 
    image: "/assets/streets-of-rage.png",
    description: "Beat 'em up action in the city streets",
    barbieConnection: "Strong community governance"
  },
  { 
    id: 3, 
    title: "Golden Axe", 
    image: "/assets/golden-axe.png",
    description: "Fantasy hack-and-slash adventure",
    barbieConnection: "Valuable NFT collectibles"
  },
  { 
    id: 4, 
    title: "Shinobi", 
    image: "/assets/shinobi.png",
    description: "Ninja action with shurikens and magic",
    barbieConnection: "Stealthy smart contract upgrades"
  },
];

const SegaShowcase: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [hoveredGame, setHoveredGame] = useState<GameItem | null>(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8" style={{
        fontFamily: '"Press Start 2P", cursive',
        color: '#FFFFFF',
        textShadow: '3px 3px 0px #FF1493, -3px -3px 0px #00CED1',
      }}>
        Sega Classics Showcase
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-32 h-32 sm:w-40 sm:h-40 bg-black border-4 border-[#FF1493] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 relative"
            onClick={() => setSelectedGame(game)}
            onMouseEnter={() => setHoveredGame(game)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <Image src={game.image} alt={game.title} width={160} height={160} className="pixelated" />
            {hoveredGame === game && (
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                <p className="text-white text-xs text-center">{game.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#4B0082] p-4 rounded-lg border-4 border-[#FF1493] max-w-sm w-full">
            <h3 className="text-xl text-white mb-4 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
              {selectedGame.title}
            </h3>
            <Image src={selectedGame.image} alt={selectedGame.title} width={300} height={300} className="pixelated mb-4" />
            <p className="text-white mb-4 text-center">{selectedGame.barbieConnection}</p>
            <button
              className="w-full px-4 py-2 bg-[#FF1493] text-white font-bold rounded-md transition-all duration-300 hover:bg-[#FF69B4] mb-4"
              style={{
                fontFamily: '"Press Start 2P", cursive',
                boxShadow: '0 4px 0 #4B0082',
                textShadow: '2px 2px 0px #4B0082',
              }}
              onClick={() => {
                // Here you would implement the mini-game logic
                alert(`Playing mini-game for ${selectedGame.title}! Win $Barbie tokens!`);
              }}
            >
              Play Mini-Game
            </button>
            <button
              className="w-full px-4 py-2 bg-[#FF1493] text-white font-bold rounded-md transition-all duration-300 hover:bg-[#FF69B4]"
              style={{
                fontFamily: '"Press Start 2P", cursive',
                boxShadow: '0 4px 0 #4B0082',
                textShadow: '2px 2px 0px #4B0082',
              }}
              onClick={() => setSelectedGame(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="text-center">
        <Link href="/avatar-generator" target="_blank" rel="noopener noreferrer">
          <button
            className="px-8 py-4 bg-[#FF1493] text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 pixel-font pixel-border animate-pulse"
            style={{
              fontFamily: '"Press Start 2P", cursive',
              boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
              textShadow: '2px 2px 0px #4B0082',
              border: '4px solid #FF69B4'
            }}
          >
            Create Your Own $Barbie Avatar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SegaShowcase;