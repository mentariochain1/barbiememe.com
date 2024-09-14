import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-4 sm:pt-8 md:pt-12 px-4">
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-6"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          color: '#FFFFFF',
          textShadow: '4px 4px 0px #FF1493, -4px -4px 0px #00CED1, 0 0 10px #FF69B4',
          WebkitTextStroke: '2px #4B0082',
          letterSpacing: '0.05em',
          transform: 'skew(-5deg, -5deg) rotate(-2deg)',
        }}
      >
        Welcome to
        <br />
        <span className="relative inline-block mt-2 mb-3 transform hover:scale-110 transition-transform duration-300">
          $Barbie
        </span>
        <br />
        World
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 text-white" 
         style={{ 
           fontFamily: '"Press Start 2P", cursive',
           textShadow: '2px 2px 0px #FF1493, -2px -2px 0px #00CED1',
           letterSpacing: '0.05em',
         }}>
        Ready to dive into the wild world of $Barbie? It&apos;s not just a token, it&apos;s a lifestyle. 
        Buckle up, buttercup – this ride&apos;s gonna be pinker than your wildest dreams!
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