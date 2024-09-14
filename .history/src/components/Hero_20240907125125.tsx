import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-120px)] px-4">
      <h1 
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold text-white leading-tight"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          textShadow: '0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4'
        }}
      >
        Welcome to<br />
        <span className="text-[#FF69B4]">$Barbie</span><br />
        World
      </h1>
    </div>
  );
};

export default Hero;