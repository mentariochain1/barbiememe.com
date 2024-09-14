import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4">
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-4"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          color: '#FF1493',
          textShadow: '2px 2px 0px #FF69B4, 4px 4px 0px #4B0082',
          WebkitTextStroke: '1px #4B0082'
        }}
      >
        Welcome to
        <br />
        <span className="relative inline-block mt-2 mb-3 transform hover:scale-110 transition-transform duration-300 text-white">
          $Barbie
          <span 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #FF1493, #FF69B4)',
              filter: 'blur(15px)',
              opacity: '0.8',
              zIndex: '-1'
            }}
          ></span>
        </span>
        <br />
        World
      </h1>
      <div className="w-48 h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 rounded-full mb-4"></div>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Ready to dive into the wild world of $Barbie? It's not just a token, it's a lifestyle. 
        Buckle up, buttercup – this ride's gonna be pinker than your wildest dreams!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative group">
          <button 
            className="absolute top-1 left-1 px-6 py-3 bg-white text-white font-bold text-base rounded-sm"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
            aria-hidden="true"
          ></button>
          <button 
            className="relative px-6 py-3 bg-pink-600 text-white font-bold text-base rounded-sm hover:bg-pink-500 transition-colors duration-300"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            BUY $BARBIE
          </button>
        </div>
        <div className="relative group">
          <button 
            className="absolute top-1 left-1 px-6 py-3 bg-white text-white font-bold text-base rounded-sm"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
            aria-hidden="true"
          ></button>
          <button 
            className="relative px-6 py-3 bg-green-500 text-white font-bold text-base rounded-sm hover:bg-green-400 transition-colors duration-300"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            JOIN THE COMMUNITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;