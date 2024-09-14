"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GameItem {
  id: number;
  title: string;
  image: string;
}

const games: GameItem[] = [
  { id: 1, title: "Sonic", image: "/assets/sonic.png" },
  { id: 2, title: "Streets of Rage", image: "/assets/streets-of-rage.png" },
  { id: 3, title: "Golden Axe", image: "/assets/golden-axe.png" },
  { id: 4, title: "Shinobi", image: "/assets/shinobi.png" },
];

const SegaShowcase: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);

  return (
    <div className="mt-16 mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8" style={{
        fontFamily: '"Press Start 2P", cursive',
        color: '#FFFFFF',
        textShadow: '3px 3px 0px #FF1493, -3px -3px 0px #00CED1',
      }}>
        Sega Classics Showcase
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-32 h-32 sm:w-40 sm:h-40 bg-black border-4 border-[#FF1493] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedGame(game)}
          >
            <Image src={game.image} alt={game.title} width={160} height={160} className="pixelated" />
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
        <button
          className="px-8 py-4 bg-[#FF1493] text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105"
          style={{
            fontFamily: '"Press Start 2P", cursive',
            boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
            textShadow: '2px 2px 0px #4B0082',
            border: '4px solid #FF69B4'
          }}
        >
          View All Games
        </button>
      </div>
    </div>
  );
};

export default SegaShowcase;