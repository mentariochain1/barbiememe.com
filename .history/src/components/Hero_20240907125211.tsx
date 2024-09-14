import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-16 sm:pt-24 md:pt-32 px-4">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-white leading-tight mb-8"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          textShadow: '0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4'
        }}
      >
        Welcome to<br />
        <span className="text-[#FF69B4]">$Barbie</span><br />
        World
      </h1>
      <div className="w-24 h-1 bg-[#FF69B4] rounded-full mb-12"></div>
    </div>
  );
};

export default Hero;