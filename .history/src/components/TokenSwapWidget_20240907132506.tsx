import React from 'react';

const TokenSwapWidget: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Swap $BARBIE
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>From</label>
        <input type="text" className="w-full px-3 py-2 bg-purple-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="0.0" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>To</label>
        <input type="text" className="w-full px-3 py-2 bg-purple-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="0.0" readOnly />
      </div>
      <button 
        className="w-full px-4 py-2 bg-pink-500 text-white font-bold rounded-md transition-all duration-300 hover:bg-pink-600"
        style={{ 
          fontFamily: '"Press Start 2P", cursive',
          boxShadow: '0 0 0 2px #FF1493, 0 0 0 4px #4B0082',
          textShadow: '1px 1px 0px #4B0082',
        }}
      >
        Swap
      </button>
    </div>
  );
};

export default TokenSwapWidget;