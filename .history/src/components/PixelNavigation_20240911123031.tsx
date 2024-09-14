import React, { useState } from 'react';
import { FaDollarSign, FaChartBar, FaRoad, FaUsers, FaShoppingCart, FaGamepad, FaBars } from 'react-icons/fa';

const PixelNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About', icon: FaDollarSign },
    { name: 'Game', icon: FaGamepad },
    { name: 'Tokenomics', icon: FaChartBar },
    { name: 'Roadmap', icon: FaRoad },
    { name: 'Team', icon: FaUsers },
  ];

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center p-4 bg-black">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <FaBars />
        </button>
        <a
          href="#buy"
          className="nav-item bg-[#FF1493] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] border-2 border-[#4B0082] hover:border-[#8A2BE2] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2 text-sm"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          <FaShoppingCart className="text-lg" />
          <span>Buy $BARBIE</span>
        </a>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:flex md:flex-wrap md:justify-center md:gap-2 text-xs sm:text-sm md:text-base font-bold p-2 rounded-lg bg-black bg-opacity-90 absolute w-full md:relative`}>
        {menuItems.map(({ name, icon: Icon }) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            className="nav-item bg-white text-black px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-white border-2 border-black hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-1 mb-2 md:mb-0"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon className="text-lg" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default PixelNavigation;