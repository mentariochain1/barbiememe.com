"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaGamepad, FaUser, FaChartBar, FaBars } from 'react-icons/fa';

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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
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
      </div>
    </motion.nav>
  );
};

export default PixelNavigation;