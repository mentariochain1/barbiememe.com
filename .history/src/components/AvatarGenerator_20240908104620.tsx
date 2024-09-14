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
    <div className="flex h-screen bg-[#4B0082]">
      {/* Левая панель (инструменты) */}
      <div className="w-16 bg-[#FF1493] border-r border-[#FF69B4] flex flex-col items-center py-4">
        <Link href="/" className="mb-8">
          <div className="w-10 h-10 bg-[#00CED1] rounded-md flex items-center justify-center text-white font-bold pixel-font">B</div>
        </Link>
        {['move', 'scale', 'rotate'].map((tool) => (
          <div key={tool} className="w-10 h-10 bg-[#FF69B4] rounded-md mb-4 flex items-center justify-center text-white cursor-pointer hover:bg-[#FF1493] pixel-font">
            {tool[0].toUpperCase()}
          </div>
        ))}
      </div>

      {/* Основная рабочая область */}
      <div className="flex-1 flex">
        {/* Центральная область (холст) */}
        <div className="flex-1 bg-[#4B0082] p-8 flex items-center justify-center">
          <div className="w-96 h-96 bg-[#FF69B4] rounded-lg flex items-center justify-center pixel-border">
            <div className="w-64 h-64 bg-black rounded-lg"></div>
          </div>
        </div>

        {/* Правая панель (инвентарь) */}
        <div className="w-64 bg-[#FF1493] border-l border-[#FF69B4] p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 pixel-font text-white">Inventory</h3>
          {['glasses', 'hat'].map(category => (
            <div key={category} className="mb-6">
              <h4 className="text-sm font-bold mb-2 pixel-font text-white">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="grid grid-cols-2 gap-2">
                {items.filter(item => item.category === category).map(item => (
                  <div
                    key={item.id}
                    className={`bg-[#4B0082] p-2 rounded cursor-pointer transition-all ${
                      selectedItems.includes(item.id) ? 'border-4 border-[#00CED1]' : 'border-4 border-[#FF69B4]'
                    } h-16 flex items-center justify-center`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <img src={item.image} alt={item.name} className="w-10 h-10 pixelated object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Верхняя панель */}
      <div className="absolute top-0 left-16 right-0 h-12 bg-[#FF1493] border-b border-[#FF69B4] flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="mr-4 pixel-font text-white">Barbie Avatar Creator</span>
          <button className="px-3 py-1 bg-[#4B0082] rounded-md text-sm pixel-font mr-2 text-white">File</button>
          <button className="px-3 py-1 bg-[#4B0082] rounded-md text-sm pixel-font text-white">Edit</button>
        </div>
        <button
          onClick={generateAvatar}
          className="bg-[#00CED1] text-white px-4 py-2 rounded hover:bg-[#4B0082] transition-colors pixel-font pixel-border"
        >
          Generate Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;