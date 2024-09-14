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
    <div className="flex flex-col h-screen bg-white">
      {/* Верхняя панель */}
      <div className="bg-[#FF1493] border-b-4 border-[#FF69B4] flex items-center justify-between px-4 h-16 md:h-20">
        <Link href="/" className="pixel-font text-white hover:text-[#00CED1] transition-colors">
          ← Back
        </Link>
        <span className="pixel-font text-white text-lg md:text-xl">Barbie Avatar Creator</span>
        <button
          onClick={generateAvatar}
          className="bg-[#00CED1] text-white px-4 py-2 rounded-none hover:bg-[#4B0082] transition-colors pixel-font text-sm md:text-base pixel-border"
        >
          Generate
        </button>
      </div>

      {/* Основная рабочая область */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Центральная область (холст) */}
        <div className="flex-1 bg-white p-4 flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-[#FF69B4] rounded-none flex items-center justify-center pixel-border">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white border-4 border-[#4B0082] rounded-none"></div>
          </div>
        </div>

        {/* Нижняя панель (инвентарь) */}
        <div className="h-48 md:h-auto md:w-64 bg-[#FF1493] border-t-4 md:border-l-4 border-[#FF69B4] p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 pixel-font text-white">Inventory</h3>
          <div className="mt-8">
            {['glasses', 'hat'].map(category => (
              <div key={category} className="mb-6">
                <h4 className="text-sm font-bold mb-2 pixel-font text-white">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {items.filter(item => item.category === category).map(item => (
                    <div
                      key={item.id}
                      className={`bg-white p-2 rounded-none cursor-pointer transition-all ${
                        selectedItems.includes(item.id) ? 'border-4 border-[#00CED1]' : 'border-4 border-[#4B0082]'
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
      </div>
    </div>
  );
};

export default AvatarGenerator;