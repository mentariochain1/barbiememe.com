"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Item {
  id: string;
  name: string;
  category: string;
  image: string;
}

const items: Item[] = [
  { id: 'glasses1', name: 'Sunglasses', category: 'glasses', image: '/assets/items/sunglasses.png' },
  { id: 'glasses2', name: 'Nerd Glasses', category: 'glasses', image: '/assets/items/nerdglasses.png' },
  { id: 'hat1', name: 'Baseball Cap', category: 'hat', image: '/assets/items/baseballcap.png' },
  { id: 'hat2', name: 'Top Hat', category: 'hat', image: '/assets/items/tophat.png' },
  // Добавьте больше предметов по необходимости
];

const AvatarGenerator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const generateAvatar = () => {
    console.log('Generating avatar with items:', selectedItems);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
      <div className="flex justify-between items-start mb-6">
        <Link href="/" className="text-pink-500 hover:text-pink-600 transition-colors pixel-font">
          ← Back to Home
        </Link>
        <button
          onClick={generateAvatar}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors pixel-font pixel-border"
        >
          Generate Avatar
        </button>
      </div>
      
      <div className="flex gap-8">
        <div className="w-1/2 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <div className="w-64 h-64 bg-black rounded-lg"></div>
        </div>
        
        <div className="w-1/2">
          <h3 className="text-xl font-bold mb-4 pixel-font">Inventory</h3>
          <div className="grid grid-cols-3 gap-4">
            {['glasses', 'hat'].map(category => (
              <div key={category} className="bg-gray-200 p-2 rounded-lg">
                <h4 className="text-sm font-bold mb-2 pixel-font">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {items.filter(item => item.category === category).map(item => (
                    <div
                      key={item.id}
                      className={`bg-white p-2 rounded cursor-pointer transition-all ${selectedItems.includes(item.id) ? 'border-4 border-pink-500' : 'border border-gray-300'}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <img src={item.image} alt={item.name} className="w-full h-auto pixelated" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;