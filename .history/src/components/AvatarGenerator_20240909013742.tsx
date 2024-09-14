"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Item {
  id: string;
  name: string;
  category: string;
  image: string;
  position: { x: number; y: number };
}

const items: Item[] = [
  { id: 'glasses1', name: 'Солнечные очки', category: 'glasses', image: '/assets/items/sunglasses.png', position: { x: 50, y: 50 } },
  { id: 'glasses2', name: 'Очки ботаника', category: 'glasses', image: '/assets/items/nerdglasses.png', position: { x: 50, y: 50 } },
  { id: 'hat1', name: 'Бейсболка', category: 'hat', image: '/assets/items/baseballcap.png', position: { x: 50, y: 0 } },
  { id: 'hat2', name: 'Цилиндр', category: 'hat', image: '/assets/items/tophat.png', position: { x: 50, y: 0 } },
  { id: 'hair1', name: 'Длинные волосы', category: 'hair', image: '/assets/items/longhair.png', position: { x: 50, y: 20 } },
  { id: 'hair2', name: 'Короткие волосы', category: 'hair', image: '/assets/items/shorthair.png', position: { x: 50, y: 20 } },
  { id: 'dress1', name: 'Платье', category: 'dress', image: '/assets/items/dress.png', position: { x: 50, y: 100 } },
  { id: 'dress2', name: 'Комбинезон', category: 'dress', image: '/assets/items/jumpsuit.png', position: { x: 50, y: 100 } },
  // Добавьте больше предметов здесь
];

const AvatarGenerator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedAvatars');
    if (saved) {
      setSavedAvatars(JSON.parse(saved));
    }
  }, []);

  const handleItemClick = (itemId: string) => {
    setSelectedItems(prev => {
      const category = items.find(item => item.id === itemId)?.category;
      const newItems = prev.filter(id => items.find(item => item.id === id)?.category !== category);
      return [...newItems, itemId];
    });
  };

  const generateAvatar = () => {
    const avatarData = JSON.stringify(selectedItems);
    setSavedAvatars(prev => [...prev, avatarData]);
    localStorage.setItem('savedAvatars', JSON.stringify([...savedAvatars, avatarData]));
    alert('Аватар сохранен!');
  };

  const loadAvatar = (avatarData: string) => {
    setSelectedItems(JSON.parse(avatarData));
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Верхняя панель */}
      <div className="bg-white border-b-4 border-pink-300 flex items-center justify-between px-4 h-16 md:h-20">
        <Link href="/" className="pixel-font text-pink-500 hover:text-pink-600 transition-colors">
          ← Назад
        </Link>
        <span className="pixel-font text-pink-500 text-lg md:text-xl">Создатель аватара Барби</span>
        <button
          onClick={generateAvatar}
          className="bg-pink-500 text-white px-4 py-2 rounded-none hover:bg-pink-600 transition-colors pixel-font text-sm md:text-base pixel-border"
        >
          Сохранить
        </button>
      </div>

      {/* Основная рабочая область */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Центральная область (холст) */}
        <div className="flex-1 bg-white p-4 flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-pink-100 rounded-none flex items-center justify-center pixel-border relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white border-4 border-pink-300 rounded-none relative">
              {selectedItems.map(itemId => {
                const item = items.find(i => i.id === itemId);
                if (item) {
                  return (
                    <Image
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="absolute pixelated object-contain"
                      style={{ left: `${item.position.x}%`, top: `${item.position.y}%`, transform: 'translate(-50%, -50%)' }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* Правая панель (инвентарь) */}
        <div className="h-48 md:h-auto md:w-64 bg-pink-50 md:border-l-4 border-pink-300 p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 pixel-font text-pink-500">Инвентарь</h3>
          <div className="mt-8">
            {['glasses', 'hat', 'hair', 'dress'].map(category => (
              <div key={category} className="mb-6">
                <h4 className="text-sm font-bold mb-2 pixel-font text-pink-400">{getCategoryName(category)}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {items.filter(item => item.category === category).map(item => (
                    <div
                      key={item.id}
                      className={`bg-white p-2 rounded-none cursor-pointer transition-all ${
                        selectedItems.includes(item.id) ? 'border-4 border-pink-500' : 'border-4 border-pink-300'
                      } h-16 flex items-center justify-center`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <Image src={item.image} alt={item.name} width={40} height={40} className="pixelated object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Нижняя панель (сохраненные аватары) */}
      <div className="bg-pink-50 border-t-4 border-pink-300 p-4">
        <h3 className="text-lg font-bold mb-4 pixel-font text-pink-500">Сохраненные аватары</h3>
        <div className="flex overflow-x-auto space-x-4">
          {savedAvatars.map((avatarData, index) => (
            <button
              key={index}
              onClick={() => loadAvatar(avatarData)}
              className="bg-white p-2 rounded-none border-4 border-pink-300 hover:border-pink-500 transition-colors"
            >
              Аватар {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

function getCategoryName(category: string): string {
  switch (category) {
    case 'glasses': return 'Очки';
    case 'hat': return 'Головные уборы';
    case 'hair': return 'Прически';
    case 'dress': return 'Одежда';
    default: return category;
  }
}

export default AvatarGenerator;