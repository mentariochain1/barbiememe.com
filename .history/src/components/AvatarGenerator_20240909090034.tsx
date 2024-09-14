"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  { id: 'glasses1', name: 'Sunglasses', category: 'glasses', image: '/assets/items/sunglasses.png', position: { x: 50, y: 50 } },
  { id: 'glasses2', name: 'Nerd Glasses', category: 'glasses', image: '/assets/items/nerdglasses.png', position: { x: 50, y: 50 } },
  { id: 'hat1', name: 'Baseball Cap', category: 'hat', image: '/assets/items/baseballcap.png', position: { x: 50, y: 0 } },
  { id: 'hat2', name: 'Top Hat', category: 'hat', image: '/assets/items/tophat.png', position: { x: 50, y: 0 } },
  { id: 'hair1', name: 'Long Hair', category: 'hair', image: '/assets/items/longhair.png', position: { x: 50, y: 20 } },
  { id: 'hair2', name: 'Short Hair', category: 'hair', image: '/assets/items/shorthair.png', position: { x: 50, y: 20 } },
  { id: 'dress1', name: 'Dress', category: 'dress', image: '/assets/items/dress.png', position: { x: 50, y: 100 } },
  { id: 'dress2', name: 'Jumpsuit', category: 'dress', image: '/assets/items/jumpsuit.png', position: { x: 50, y: 100 } },
  // Add more items here
];

const AvatarGenerator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('glasses');
  const [scale, setScale] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [background, setBackground] = useState('pink-100');
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('savedAvatars');
    if (saved) {
      setSavedAvatars(JSON.parse(saved));
    }
  }, []);

  const handleItemClick = (itemId: string) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        // Если элемент уже выбран, удаляем его
        return prev.filter(id => id !== itemId);
      } else {
        // Если элемент не выбран, добавляем его, удаляя предыдущий элемент той же категории
        const category = items.find(item => item.id === itemId)?.category;
        const newItems = prev.filter(id => items.find(item => item.id === id)?.category !== category);
        return [...newItems, itemId];
      }
    });
  };

  const generateAvatar = () => {
    const avatarData = JSON.stringify(selectedItems);
    setSavedAvatars(prev => [...prev, avatarData]);
    localStorage.setItem('savedAvatars', JSON.stringify([...savedAvatars, avatarData]));
    alert('Avatar saved!');
  };

  const loadAvatar = (avatarData: string) => {
    setSelectedItems(JSON.parse(avatarData));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prevScale => Math.max(0.5, Math.min(2, prevScale - e.deltaY * 0.01)));
  };

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    e.dataTransfer.setData('text/plain', itemId);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text');
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (canvasRect) {
      const x = ((e.clientX - canvasRect.left) / canvasRect.width) * 100;
      const y = ((e.clientY - canvasRect.top) / canvasRect.height) * 100;
      setSelectedItems(prev => {
        const updatedItems = prev.filter(id => id !== itemId);
        return [...updatedItems, itemId];
      });
      // Обновите позицию элемента здесь (потребуется дополнительное состояние для хранения позиций)
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top panel */}
      <div className="bg-white border-b-4 border-pink-300 flex items-center justify-between px-4 h-16 md:h-20">
        <Link href="/" className="pixel-font text-pink-500 hover:text-pink-600 transition-colors">
          ← Back
        </Link>
        <span className="pixel-font text-pink-500 text-lg md:text-xl">Barbie Avatar Creator</span>
        <button
          onClick={generateAvatar}
          className="bg-pink-500 text-white px-4 py-2 rounded-none hover:bg-pink-600 transition-colors pixel-font text-sm md:text-base pixel-border"
        >
          Save
        </button>
      </div>

      {/* Main work area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Central area (canvas) */}
        <div className="flex-1 bg-white p-4 flex flex-col items-center justify-center">
          <div className="mb-4 flex space-x-4">
            <button onClick={() => setShowGrid(!showGrid)} className="px-4 py-2 bg-pink-500 text-white rounded">
              {showGrid ? 'Hide Grid' : 'Show Grid'}
            </button>
            <select
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="px-4 py-2 border border-pink-300 rounded"
            >
              <option value="pink-100">Pink</option>
              <option value="blue-100">Blue</option>
              <option value="green-100">Green</option>
            </select>
          </div>
          <div
            ref={canvasRef}
            className={`w-64 h-64 md:w-96 md:h-96 bg-${background} rounded-none flex items-center justify-center pixel-border relative overflow-hidden`}
            style={{ transform: `scale(${scale})` }}
            onWheel={handleWheel}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {showGrid && (
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-pink-200 opacity-50" />
                ))}
              </div>
            )}
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
                      className="absolute pixelated object-contain cursor-move"
                      style={{ left: `${item.position.x}%`, top: `${item.position.y}%`, transform: 'translate(-50%, -50%)' }}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <button onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))} className="px-4 py-2 bg-pink-500 text-white rounded">-</button>
            <button onClick={() => setScale(prev => Math.min(2, prev + 0.1))} className="px-4 py-2 bg-pink-500 text-white rounded">+</button>
          </div>
        </div>

        {/* Right panel (saved avatars) */}
        <div className="w-64 bg-pink-50 border-l-4 border-pink-300 p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 pixel-font text-pink-500">Saved Avatars</h3>
          <div className="space-y-2">
            {savedAvatars.map((avatarData, index) => (
              <button
                key={index}
                onClick={() => loadAvatar(avatarData)}
                className="w-full bg-white p-2 rounded-none border-4 border-pink-300 hover:border-pink-500 transition-colors pixel-font text-pink-500"
              >
                Avatar {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom panel (inventory) */}
      <div className="bg-pink-50 border-t-4 border-pink-300 p-4">
        <div className="flex justify-center space-x-4 mb-4">
          {['glasses', 'hat', 'hair', 'dress'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-none pixel-font ${
                activeCategory === category ? 'bg-pink-500 text-white' : 'bg-white text-pink-500 border-4 border-pink-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {items.filter(item => item.category === activeCategory).map(item => (
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
    </div>
  );
};

export default AvatarGenerator;