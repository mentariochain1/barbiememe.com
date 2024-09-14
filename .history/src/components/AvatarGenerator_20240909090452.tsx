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
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - canvasPosition.x, y: e.clientY - canvasPosition.y });
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setCanvasPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top panel */}
      <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 h-12">
        <Link href="/" className="text-blue-500 hover:text-blue-600 transition-colors">
          ← Back
        </Link>
        <div className="flex items-center space-x-4">
          <button onClick={() => setShowGrid(!showGrid)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
            {showGrid ? 'Hide Grid' : 'Show Grid'}
          </button>
          <select
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="pink-100">Pink</option>
            <option value="blue-100">Blue</option>
            <option value="green-100">Green</option>
          </select>
          <div className="flex items-center space-x-2">
            <button onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">-</button>
            <span className="text-sm">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(prev => Math.min(2, prev + 0.1))} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">+</button>
          </div>
        </div>
        <button
          onClick={generateAvatar}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors text-sm"
        >
          Save
        </button>
      </div>

      {/* Main work area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar (tools) */}
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-4">
          {['select', 'move', 'scale', 'rotate'].map(tool => (
            <button key={tool} className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white">
              {tool[0].toUpperCase()}
            </button>
          ))}
        </div>

        {/* Central area (canvas) */}
        <div className="flex-1 bg-gray-200 overflow-hidden relative"
             onMouseDown={handleCanvasMouseDown}
             onMouseMove={handleCanvasMouseMove}
             onMouseUp={handleCanvasMouseUp}
             onMouseLeave={handleCanvasMouseUp}>
          <div
            ref={canvasRef}
            className={`w-64 h-64 md:w-96 md:h-96 bg-${background} rounded-lg shadow-lg absolute`}
            style={{ 
              transform: `scale(${scale}) translate(${canvasPosition.x}px, ${canvasPosition.y}px)`,
              transformOrigin: '0 0',
            }}
          >
            {showGrid && (
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-gray-300 opacity-50" />
                ))}
              </div>
            )}
            <div className="w-full h-full bg-white relative">
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
        </div>

        {/* Right panel (saved avatars) */}
        <div className="w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4 text-gray-700">Saved Avatars</h3>
          <div className="space-y-2">
            {savedAvatars.map((avatarData, index) => (
              <button
                key={index}
                onClick={() => loadAvatar(avatarData)}
                className="w-full bg-gray-100 p-2 rounded text-left hover:bg-gray-200 transition-colors text-sm"
              >
                Avatar {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom panel (layers) */}
      <div className="h-32 bg-white border-t border-gray-200 p-4">
        <h3 className="text-sm font-bold mb-2 text-gray-700">Layers</h3>
        <div className="space-y-1">
          {selectedItems.map(itemId => {
            const item = items.find(i => i.id === itemId);
            return (
              <div key={itemId} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span className="text-sm">{item?.name}</span>
                <button onClick={() => handleItemClick(itemId)} className="text-red-500 text-sm">Remove</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inventory panel */}
      <div className="absolute bottom-32 left-16 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-start space-x-4 mb-4 overflow-x-auto">
          {['glasses', 'hat', 'hair', 'dress'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded ${
                activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } text-sm`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-4">
          {items.filter(item => item.category === activeCategory).map(item => (
            <div
              key={item.id}
              className={`bg-white p-2 rounded cursor-pointer transition-all ${
                selectedItems.includes(item.id) ? 'border-2 border-blue-500' : 'border border-gray-300'
              } flex items-center justify-center`}
              onClick={() => handleItemClick(item.id)}
            >
              <Image src={item.image} alt={item.name} width={32} height={32} className="pixelated object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;