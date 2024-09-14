"use client";

import React, { useState, useEffect } from 'react';

interface Accessory {
  id: string;
  name: string;
  image: string;
  category: string;
}

const accessories: Accessory[] = [
  { id: 'glasses1', name: 'Glassesone', image: '/generator/glassesone1.png', category: 'Glasses' },
  { id: 'glasses2', name: 'Sunglasses', image: '/assets/items/sunglasses.png', category: 'Glasses' },
  { id: 'glasses3', name: 'Nerd Glasses', image: '/assets/items/nerdglasses.png', category: 'Glasses' },
  { id: 'hat1', name: 'Baseball Cap', image: '/assets/items/baseballcap.png', category: 'Hats' },
  { id: 'hair1', name: 'Ponytail', image: '/assets/items/ponytail.png', category: 'Hair' },
  { id: 'outfit1', name: 'Dress', image: '/assets/items/dress.png', category: 'Outfits' },
  // Add more accessories as needed
];

function AvatarGenerator() {
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<string[][]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

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
    if (selectedAccessories.length > 0) {
      const newAvatar = [...selectedAccessories].sort();
      if (!savedAvatars.some(avatar => JSON.stringify(avatar) === JSON.stringify(newAvatar))) {
        setSavedAvatars(prev => [...prev, newAvatar]);
        localStorage.setItem('savedAvatars', JSON.stringify([...savedAvatars, newAvatar]));
      } else {
        alert("This avatar combination already exists!");
      }
    } else {
      alert("Please select at least one accessory before saving!");
    }
  };

  const handleMint = () => {
    alert("Minting functionality is not implemented yet.");
  };

  const buttonStyle = {
    fontFamily: '"Press Start 2P", cursive',
    boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
    textShadow: '2px 2px 0px #4B0082',
    border: '4px solid #9370DB'
  };

  const categories = ['All', ...Array.from(new Set(accessories.map(a => a.category)))];

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      {/* Main Avatar Display */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/generator/nftbarbie.png"
            alt="NFT Barbie"
            className="w-full h-full object-contain"
          />
          {/* Render selected accessories here */}
          {selectedAccessories.map(id => {
            const accessory = accessories.find(a => a.id === id);
            return accessory && (
              <img 
                key={id}
                src={accessory.image}
                alt={accessory.name}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            );
          })}
        </div>
        <div className="mt-8 flex space-x-4">
          <button 
            onClick={handleSaveAvatar} 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Save Avatar
          </button>
          <button 
            onClick={handleMint} 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Mint NFT
          </button>
        </div>
      </div>

      {/* Accessories Panel */}
      <div className="w-1/3 bg-gradient-to-b from-pink-300 to-purple-400 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>Customize Your Barbie</h2>
        
        {/* Categories */}
        <div className="flex mb-6 space-x-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-purple-700 text-white' : 'bg-pink-200 text-purple-700'}`}
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '10px' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-3 gap-4">
          {accessories
            .filter(accessory => activeCategory === 'All' || accessory.category === activeCategory)
            .map((accessory) => (
              <div 
                key={accessory.id} 
                className={`p-2 border-4 border-purple-700 rounded-lg cursor-pointer transition-all duration-300 ${selectedAccessories.includes(accessory.id) ? 'bg-pink-300 scale-105' : 'bg-white hover:shadow-md'}`}
                onClick={() => handleAccessoryClick(accessory.id)}
              >
                <img src={accessory.image} alt={accessory.name} className="w-full h-24 object-contain mb-2" />
                <p className="text-center text-sm font-bold text-purple-700" style={{ fontFamily: '"Press Start 2P", cursive' }}>{accessory.name}</p>
              </div>
            ))}
        </div>

        {/* Saved Avatars */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>Saved Avatars</h3>
          <div className="grid grid-cols-3 gap-4">
            {savedAvatars.map((avatar, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedAccessories(avatar)}
                className="w-full aspect-square bg-white rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-full">
                  <img
                    src="/generator/nftbarbie.png"
                    alt={`Avatar ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                  {avatar.map(id => {
                    const accessory = accessories.find(a => a.id === id);
                    return accessory && (
                      <img 
                        key={id}
                        src={accessory.image}
                        alt={accessory.name}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarGenerator;