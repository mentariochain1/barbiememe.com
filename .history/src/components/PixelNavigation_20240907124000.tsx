import React from 'react';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-6 text-xl font-bold" style={{ fontFamily: '"Press Start 2P", cursive' }}>
      <a href="#about" className="hover:text-gray-300">About</a>
      <a href="#tokenomics" className="hover:text-gray-300">Tokenomics</a>
      <a href="#roadmap" className="hover:text-gray-300">Roadmap</a>
      <a href="#team" className="hover:text-gray-300">Team</a>
    </nav>
  );
};

export default PixelNavigation;