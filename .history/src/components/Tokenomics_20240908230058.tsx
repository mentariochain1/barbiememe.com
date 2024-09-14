import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TokenomicsItem {
  percentage: number;
  title: string;
  description: string;
  icon: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    percentage: 30,
    title: "Liquidity",
    description: "Ensures stable trading and price",
    icon: "🌊"
  },
  {
    percentage: 50,
    title: "Marketing",
    description: "Promotes $Barbie to the moon!",
    icon: "🚀"
  },
  {
    percentage: 20,
    title: "Big Burn Program",
    description: "Reduces supply, increases value",
    icon: "🔥"
  }
];

const Tokenomics: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<TokenomicsItem | null>(null);

  return (
    <div className="w-full py-16 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title">
        Tokenomics
      </h2>
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                boxShadow: '0 0 10px #FF69B4, 0 0 20px #4B0082',
                border: '4px solid #FF1493'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredItem(item)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">{item.percentage}%</h3>
              <p className="text-purple-700 font-bold">{item.title}</p>
              {hoveredItem === item && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-pink-500 bg-opacity-90 flex items-center justify-center p-4 rounded-lg"
                >
                  <p className="text-white">{item.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center text-white">
          <p className="text-xl font-bold mb-4">LP BURNT 🔒</p>
          <p className="text-2xl font-bold text-green-300">0% TAX 🎉</p>
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
          onClick={() => alert("Coming soon: 'Collect $Barbie Tokens' mini-game!")}
        >
          Play & Learn
        </button>
      </div>
    </div>
  );
};

export default Tokenomics;