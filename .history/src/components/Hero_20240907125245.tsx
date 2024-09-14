import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-16 sm:pt-24 md:pt-32 px-4">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold leading-tight mb-8"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          background: 'linear-gradient(45deg, #FF69B4, #FFB6C1, #FFC0CB)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '3px 3px 0px #4B0082'
        }}
      >
        Welcome to
        <br />
        <span className="relative inline-block mt-2 mb-4">
          $Barbie
          <span 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #FF1493, #FF69B4)',
              filter: 'blur(15px)',
              opacity: '0.7',
              zIndex: '-1'
            }}
          ></span>
        </span>
        <br />
        World
      </h1>
      <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mb-12"></div>
    </div>
  );
};

export default Hero;