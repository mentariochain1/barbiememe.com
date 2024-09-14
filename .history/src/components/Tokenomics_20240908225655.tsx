import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full py-16 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12" style={{
        fontFamily: '"Press Start 2P", cursive',
        color: '#FFFFFF',
        textShadow: '3px 3px 0px #FF1493, -3px -3px 0px #00CED1',
      }}>
        Tokenomics
      </h2>
      <div className="max-w-4xl mx-auto bg-pink-100 rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">30%</h3>
            <p className="text-gray-700">Liquidity</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">50%</h3>
            <p className="text-gray-700">Marketing</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">20%</h3>
            <p className="text-gray-700">Big Burn Program</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold mb-4 text-pink-600">LP BURNT</p>
          <p className="text-2xl font-bold text-green-500">0% TAX</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-600 hover:scale-105"
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  boxShadow: '0 0 0 4px #FF69B4, 0 0 0 8px #4B0082',
                  textShadow: '2px 2px 0px #4B0082',
                }}>
          View Contract
        </button>
      </div>
    </div>
  );
};

export default Tokenomics;