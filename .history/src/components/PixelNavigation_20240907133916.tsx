import React from 'react';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg font-bold p-4 rounded-lg">
      {['About', 'Tokenomics', 'Roadmap', 'Team'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="bg-white text-black px-3 py-2 sm:px-4 sm:py-3 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-white border-2 sm:border-4 border-black hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default PixelNavigation;