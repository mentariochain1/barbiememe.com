import React from 'react';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-4 text-lg font-bold bg-gray-800 p-4 rounded-lg">
      {['About', 'Tokenomics', 'Roadmap', 'Team'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="bg-white text-black px-4 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-[#FF69B4] border-2 border-black hover:border-[#FF69B4]"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default PixelNavigation;