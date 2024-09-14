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
      <div className="mt-4">
        <button onClick={generateAvatar} className="px-4 py-2 bg-pink-500 text-white rounded">
          Сгенерировать аватар
        </button>
      </div>
      <div className="mt-4">
        {savedAvatars.map((avatar, index) => (
          <button key={index} onClick={() => loadAvatar(avatar)} className="mr-2 px-3 py-1 bg-pink-300 rounded">
            Аватар {index + 1}
          </button>
        ))}
      </div>
      {/* ... остальные элементы интерфейса ... */}
    </div>
  );
}

export default AvatarGenerator;