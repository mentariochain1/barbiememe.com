"use client";

import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaChartBar, FaRoad, FaUsers, FaShoppingCart, FaGamepad, FaBars } from 'react-icons/fa';

const PixelNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', icon: FaDollarSign },
    { name: 'Game', icon: FaGamepad },
    { name: 'Tokenomics', icon: FaChartBar },
    { name: 'Roadmap', icon: FaRoad },
    { name: 'Team', icon: FaUsers },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex justify-between items-center py-4 md:py-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
          <div className="hidden md:flex md:flex-1 md:justify-center md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {menuItems.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="nav-item text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-black border-2 border-transparent hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2"
                style={{ fontFamily: '"Press Start 2P", cursive' }}
              >
                <Icon className="text-lg xl:text-xl" />
                <span className="text-xs lg:text-sm xl:text-base">{name}</span>
              </a>
            ))}
          </div>
          <a
            href="#buy"
            className="nav-item bg-[#FF1493] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] border-2 border-[#4B0082] hover:border-[#8A2BE2] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2 text-sm lg:text-base"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            <FaShoppingCart className="text-lg xl:text-xl" />
            <span>Buy $BARBIE</span>
          </a>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-90 absolute w-full`}>
        {menuItems.map(({ name, icon: Icon }) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            className="nav-item text-white px-4 py-3 border-b border-gray-700 flex items-center space-x-2"
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