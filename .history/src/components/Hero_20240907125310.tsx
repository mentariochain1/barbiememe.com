import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-16 sm:pt-24 md:pt-32 px-4">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold leading-tight mb-8"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          color: '#FF1493',
          textShadow: '3px 3px 0px #FF69B4, 6px 6px 0px #4B0082',
          WebkitTextStroke: '2px #4B0082'
        }}
      >
        Welcome to
        <br />
        <span className="relative inline-block mt-4 mb-6 transform hover:scale-110 transition-transform duration-300">
          $Barbie
          <span 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #FF1493, #FF69B4)',
              filter: 'blur(20px)',
              opacity: '0.8',
              zIndex: '-1'
            }}
          ></span>
        </span>
        <br />
        World
      </h1>
      <div className="w-64 h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 rounded-full mb-12"></div>
    </div>
  );
};

export default Hero;