"use client";

import React, { useState, useEffect } from 'react';

interface Accessory {
  id: string;
  name: string;
  image: string;
}

const accessories: Accessory[] = [
  { id: 'glasses1', name: 'Sunglasses', image: '/assets/items/sunglasses.png' },
  { id: 'glasses2', name: 'Nerd Glasses', image: '/assets/items/nerdglasses.png' },
  { id: 'hat1', name: 'Baseball Cap', image: '/assets/items/baseballcap.png' },
  // Add more accessories as needed
];

function AvatarGenerator() {
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<string[]>([]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('savedAvatars');
    if (saved) {
      setSavedAvatars(JSON.parse(saved));
    }
  }, []);

  const handleAccessoryClick = (accessoryId: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accessoryId) 
        ? prev.filter(id => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const handleSaveAvatar = () => {
    const avatarData = JSON.stringify(selectedAccessories);
    setSavedAvatars(prev => [...prev, avatarData]);
    localStorage.setItem('savedAvatars', JSON.stringify([...savedAvatars, avatarData]));
  };

  const handleConnectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true);
  };

  const handleMint = () => {
    if (isWalletConnected) {
      // Implement minting logic here
      console.log("Minting NFT...");
    } else {
      alert("Please connect your wallet first!");
    }
  };

  const buttonStyle = {
    fontFamily: '"Press Start 2P", cursive',
    boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
    textShadow: '2px 2px 0px #4B0082',
    border: '4px solid #9370DB'
  };

  return (
    <div className="flex h-screen bg-pink-100">
      {/* Main Avatar Display */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[500px] h-[500px]">
          <img
            src="/generator/nftbarbie.png"
            alt="NFT Barbie"
            className="w-full h-full object-contain"
          />
          {/* Render selected accessories here */}
        </div>
      </div>

      {/* Accessories Panel */}
      <div className="w-1/4 bg-pink-200 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <div className="grid grid-cols-2 gap-4">
          {accessories.map((accessory) => (
            <div 
              key={accessory.id} 
              className={`p-2 border rounded cursor-pointer ${selectedAccessories.includes(accessory.id) ? 'bg-pink-300' : 'bg-white'}`}
              onClick={() => handleAccessoryClick(accessory.id)}
            >
              <img src={accessory.image} alt={accessory.name} className="w-full h-24 object-contain mb-2" />
              <p className="text-center">{accessory.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button 
            onClick={handleSaveAvatar} 
            className="w-full mb-4 px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Save Avatar
          </button>
          {!isWalletConnected && (
            <button 
              onClick={handleConnectWallet} 
              className="w-full mb-4 px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={buttonStyle}
            >
              Connect Wallet
            </button>
          )}
          <button 
            onClick={handleMint} 
            className="w-full px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
            disabled={!isWalletConnected}
          >
            Mint NFT
          </button>
        </div>

        {/* Saved Avatars */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Saved Avatars</h2>
          <div className="space-y-2">
            {savedAvatars.map((avatar, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedAccessories(JSON.parse(avatar))}
                className="w-full px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={buttonStyle}
              >
                Avatar {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarGenerator;