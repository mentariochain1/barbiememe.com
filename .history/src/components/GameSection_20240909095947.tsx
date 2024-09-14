import React from 'react';
import Link from 'next/link';

const GameSection: React.FC = () => {
  return (
    <div id="game-section" className="w-full py-16 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 sega-barbie-title text-pink-300">
          Play, Win, and Slay!
        </h2>
        <div className="text-center">
          <p className="mb-6 text-base sm:text-lg md:text-xl text-pink-100 pixel-font"
             style={{ 
               fontFamily: '"Press Start 2P", cursive',
               textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
               letterSpacing: '0.05em',
             }}>
            Ready to turn your $BARBIE dreams into a high-score reality? It's not just a game, it's a glittery adventure!
          </p>
          <p className="mb-8 text-base sm:text-lg md:text-xl text-pink-100 pixel-font"
             style={{ 
               fontFamily: '"Press Start 2P", cursive',
               textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #4B0082',
               letterSpacing: '0.05em',
             }}>
            Buckle up, buttercup – this leaderboard's gonna be pinker than your wildest fantasies! Top players snag exclusive $BARBIE tokens and NFTs. Don't be a plain Jane, be a $BARBIE boss!
          </p>
        </div>
        <div className="text-center">
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
              Start Your Barbie Adventure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameSection;