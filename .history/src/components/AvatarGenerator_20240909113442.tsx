"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "./ui/button";

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
];

const accessories: Item[] = [
  { id: 'glasses1', name: 'Sunglasses', category: 'glasses', image: '/assets/items/sunglasses.png', position: { x: 50, y: 50 } },
  { id: 'glasses2', name: 'Nerd Glasses', category: 'glasses', image: '/assets/items/nerdglasses.png', position: { x: 50, y: 50 } },
  { id: 'hat1', name: 'Baseball Cap', category: 'hat', image: '/assets/items/baseballcap.png', position: { x: 50, y: 0 } },
  // ... добавьте больше аксессуаров по необходимости
];

function AvatarGenerator() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<string[]>([]);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem('savedAvatars');
    if (saved) {
      setSavedAvatars(JSON.parse(saved));
    }
  }, []);

  const handleItemClick = (itemId: string) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const generateAvatar = () => {
    const avatarData = JSON.stringify(selectedItems);
    setSavedAvatars(prev => [...prev, avatarData]);
    localStorage.setItem('savedAvatars', JSON.stringify([...savedAvatars, avatarData]));
  };

  const loadAvatar = (avatarData: string) => {
    setSelectedItems(JSON.parse(avatarData));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="relative w-full max-w-[1200px] h-auto aspect-[2056/1329] bg-pink-100 flex items-center justify-center">
        <img
          src="/generator/nftbarbie.png"
          alt="NFT Barbie"
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* Аватар */}
        <div className="relative w-[60%] aspect-square">
          <div 
            className="w-full h-full border-4 border-pink-400 overflow-hidden"
            style={{ transform: `scale(${scale})` }}
          >
            {/* ... содержимое аватара ... */}
          </div>
        </div>
      </div>
      
      {/* Inventory Panel */}
      <div className="mt-8 w-full max-w-[1200px] bg-pink-200 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <div className="grid grid-cols-4 gap-4">
          {accessories.map((item) => (
            <div 
              key={item.id} 
              className={`p-2 border rounded cursor-pointer ${selectedItems.includes(item.id) ? 'bg-pink-300' : 'bg-white'}`}
              onClick={() => handleItemClick(item.id)}
            >
              <img src={item.image} alt={item.name} className="w-full h-32 object-contain mb-2" />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 space-x-4">
        <Button onClick={generateAvatar} variant="default">
          Generate Avatar
        </Button>
        <Button onClick={() => setSelectedItems([])} variant="outline">
          Clear Selection
        </Button>
      </div>
      
      <div className="mt-4 space-x-2">
        {savedAvatars.map((avatar, index) => (
          <Button key={index} onClick={() => loadAvatar(avatar)} variant="secondary">
            Avatar {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default AvatarGenerator;