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
    <div className="flex h-screen bg-white">
      {/* Левая панель (инструменты) */}
      <div className="w-16 bg-gray-100 border-r border-gray-200 flex flex-col items-center py-4">
        <Link href="/" className="mb-8">
          <div className="w-10 h-10 bg-pink-500 rounded-md flex items-center justify-center text-white font-bold pixel-font">B</div>
        </Link>
        {['move', 'scale', 'rotate'].map((tool) => (
          <div key={tool} className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 pixel-font">
            {tool[0].toUpperCase()}
          </div>
        ))}
      </div>

      {/* Основная рабочая область */}
      <div className="flex-1 flex">
        {/* Центральная область (холст) */}
        <div className="flex-1 bg-white p-8 flex items-center justify-center">
          <div className="w-96 h-96 bg-gray-100 rounded-lg flex items-center justify-center pixel-border">
            <div className="w-64 h-64 bg-white border-4 border-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Правая панель (инвентарь) */}
        <div className="w-64 bg-gray-100 border-l border-gray-200 p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 pixel-font text-gray-800">Inventory</h3>
          <div className="mt-8"> {/* Добавлен отступ сверху */}
            {['glasses', 'hat'].map(category => (
              <div key={category} className="mb-6">
                <h4 className="text-sm font-bold mb-2 pixel-font text-gray-700">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {items.filter(item => item.category === category).map(item => (
                    <div
                      key={item.id}
                      className={`bg-white p-2 rounded cursor-pointer transition-all ${
                        selectedItems.includes(item.id) ? 'border-4 border-pink-500' : 'border-4 border-gray-300'
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

      {/* Верхняя панель */}
      <div className="absolute top-0 left-16 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="mr-4 pixel-font text-gray-800">Barbie Avatar Creator</span>
          <button className="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-md text-sm pixel-font mr-2 text-gray-700">File</button>
          <button className="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-md text-sm pixel-font text-gray-700">Edit</button>
        </div>
        <button
          onClick={generateAvatar}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors pixel-font"
          style={{
            boxShadow: '0 4px 0 #9B2C2C',
            transform: 'translateY(-2px)',
          }}
        >
          Generate Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;