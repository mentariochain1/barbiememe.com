import React from 'react';
import Link from 'next/link';

const GameSection: React.FC = () => {
  return (
    <div id="game-section" className="w-full py-16 px-4 bg-purple-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 sega-barbie-title">
        Play, Win, and Climb the Leaderboard!
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-6 text-lg">
          Join the $BARBIE game and compete for amazing prizes! Our weekly tournaments offer you a chance to win big and show off your skills.
        </p>
        <p className="mb-8 text-lg">
          Top players on our leaderboard will receive exclusive $BARBIE tokens and limited edition NFTs. Don't miss out on this opportunity to boost your $BARBIE holdings!
        </p>
        <Link href="/game">
          <button 
            className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ 
              fontFamily: '"Press Start 2P", cursive',
              boxShadow: '0 0 0 4px #FF1493, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
              textShadow: '2px 2px 0px #4B0082',
              border: '4px solid #FF69B4'
            }}
          >
            Start Playing Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameSection;