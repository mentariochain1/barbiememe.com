import React from 'react';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-6 text-lg font-bold">
      {['About', 'Tokenomics', 'Roadmap', 'Team'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-md transition-all duration-300 hover:from-pink-500 hover:to-purple-600 border-4 border-white hover:border-purple-300 hover:shadow-[0_0_15px_rgba(255,105,180,0.7)] transform hover:scale-110"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default PixelNavigation;