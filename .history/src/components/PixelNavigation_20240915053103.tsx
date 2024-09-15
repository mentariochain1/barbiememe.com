"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaGamepad, FaUser, FaChartBar, FaTwitter, FaTelegram, FaBars } from 'react-icons/fa';
import { SiDextools } from 'react-icons/si';

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
    { name: 'Home', icon: FaHome, sectionId: 'hero' },
    { name: 'Game', icon: FaGamepad, sectionId: 'game-section' },
    { name: 'Avatar', icon: FaUser, sectionId: 'avatar-section' },
    { name: 'Chart', icon: FaChartBar, sectionId: 'chart-section' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-white font-bold text-lg" style={{ fontFamily: '"Press Start 2P", cursive' }}>$BARBIE</span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
              <FaBars />
            </button>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-center md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {menuItems.map(({ name, icon: Icon, sectionId }, index) => (
              <motion.a
                key={name}
                onClick={() => scrollToSection(sectionId)}
                className="nav-item text-white px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] hover:text-black border-2 border-transparent hover:border-[#FF1493] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2 cursor-pointer"
                style={{ fontFamily: '"Press Start 2P", cursive' }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="text-lg xl:text-xl" />
                <span className="text-xs lg:text-sm xl:text-base">{name}</span>
              </motion.a>
            ))}
            <motion.a
              href="https://x.com/BarbieMemeSol"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item text-white hover:text-pink-300 transition-colors duration-300 flex items-center space-x-1"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
              variants={itemVariants}
            >
              <FaTwitter className="text-lg" />
              <span className="text-sm">Twitter</span>
            </motion.a>
            <motion.a
              href="https://t.me/BarbiePortal"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item text-white hover:text-pink-300 transition-colors duration-300 flex items-center space-x-1"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
              variants={itemVariants}
            >
              <FaTelegram className="text-lg" />
              <span className="text-sm">Telegram</span>
            </motion.a>
            <motion.a
              href="https://www.dextools.io/app/en/ether/pair-explorer/YOUR_PAIR_ADDRESS"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item bg-[#FF1493] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF69B4] border-2 border-[#4B0082] hover:border-[#8A2BE2] hover:shadow-[0_0_10px_#FF69B4] transform hover:scale-105 flex items-center space-x-2 text-sm lg:text-base"
              style={{ fontFamily: '"Press Start 2P", cursive' }}
              variants={itemVariants}
            >
              <SiDextools className="text-lg xl:text-xl" />
              <span>DEXSCRN</span>
            </motion.a>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-90 absolute w-full`}>
        {menuItems.map(({ name, icon: Icon, sectionId }) => (
          <a
            key={name}
            onClick={() => scrollToSection(sectionId)}
            className="nav-item text-white px-4 py-3 border-b border-gray-700 flex items-center space-x-2 cursor-pointer"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            <Icon className="text-lg" />
            <span>{name}</span>
          </a>
        ))}
        <a
          href="https://x.com/BarbieMemeSol"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item text-white px-4 py-3 border-b border-gray-700 flex items-center space-x-2"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          <FaTwitter className="text-lg" />
          <span>Twitter</span>
        </a>
        <a
          href="https://t.me/BarbiePortal"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item text-white px-4 py-3 border-b border-gray-700 flex items-center space-x-2"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          <FaTelegram className="text-lg" />
          <span>Telegram</span>
        </a>
        <a
          href="https://www.dextools.io/app/en/ether/pair-explorer/YOUR_PAIR_ADDRESS"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item text-white px-4 py-3 border-b border-gray-700 flex items-center space-x-2"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          <SiDextools className="text-lg" />
          <span>DEXSCRN</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default PixelNavigation;