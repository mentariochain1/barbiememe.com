import React from 'react';
import { FaDollarSign, FaChartBar, FaRoad, FaUsers, FaShoppingCart, FaGamepad } from 'react-icons/fa';

const PixelNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg font-bold p-4 rounded-lg">
      {[
        { name: 'About', icon: FaDollarSign },
        { name: 'Game', icon: FaGamepad },
        { name: 'Tokenomics', icon: FaChartBar },
        { name: 'Roadmap', icon: FaRoad },
        { name: 'Team', icon: FaUsers },
      ].map(({ name, icon: Icon }) => (
        <a
          key={name}
          href={`#${name.toLowerCase()}`}
          className="nav-item bg-white text-black px-4 py-3 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-white border-4 border-black hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          <Icon className="text-xl" />
          <span>{name}</span>
        </a>
      ))}
      <a
        href="#buy"
        className="nav-item bg-[#FF1493] text-white px-4 py-3 rounded-md transition-all duration-300 hover:bg-[#FF69B4] border-4 border-[#4B0082] hover:border-[#8A2BE2] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2"
        style={{ fontFamily: '"Press Start 2P", cursive' }}
      >
        <FaShoppingCart className="text-xl" />
        <span>Buy $BARBIE</span>
      </a>
    </nav>
  );
};

export default PixelNavigation;