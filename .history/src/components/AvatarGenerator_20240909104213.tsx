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
        return prev.filter(id => id !== itemId);
      } else {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="relative w-[2056px] h-[1329px] bg-pink-100 flex items-center justify-center">
        <div className="relative w-[1000px] h-[1000px]">
          <img
            src="/generator/nftbarbie.png"
            alt="NFT Barbie"
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Аватар */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative w-[800px] h-[800px] border-4 border-pink-400 rounded-full overflow-hidden"
              style={{ transform: `scale(${scale})` }}
            >
              {/* ... содержимое аватара ... */}
            </div>
          </div>
        </div>
      </div>
      {/* ... остальные элементы интерфейса ... */}
    </div>
  );
}

export default AvatarGenerator;