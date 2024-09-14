import React from 'react';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-6 text-lg font-bold">
      {['About', 'Tokenomics', 'Roadmap', 'Team'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="bg-white text-black px-6 py-3 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-white border-4 border-black hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-110"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default PixelNavigation;