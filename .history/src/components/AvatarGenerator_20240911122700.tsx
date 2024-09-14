"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import html2canvas from 'html2canvas';

interface Accessory {
  id: string;
  name: string;
  image: string;
  category: string;
}

interface SelectedAccessory extends Accessory {
  position: { x: number; y: number };
  scale: number;
  rotation: number;
}

const accessories: Accessory[] = [
  { id: 'glasses1', name: 'Sunglasses', image: '/generator/glassesone1.png', category: 'Glasses' },
  { id: 'glasses3', name: 'Nerd Glasses', image: '/assets/items/nerdglasses.png', category: 'Glasses' },
  { id: 'glasses4', name: 'DealWithIt', image: '/generator/barbieglasses2.png', category: 'Glasses' },
  { id: 'hat2', name: 'Bunny Hat', image: '/generator/hatbarbie1.png', category: 'Hats' },
  { id: 'hat3', name: 'Baseball Cap', image: '/generator/SwagBaseball_.png', category: 'Hats' },
  { id: 'hair1', name: 'Ponytail', image: '/assets/items/ponytail.png', category: 'Hair' },
  { id: 'outfit1', name: 'Dress', image: '/assets/items/dress.png', category: 'Outfits' },
];

function AvatarGenerator() {
  const [selectedAccessories, setSelectedAccessories] = useState<SelectedAccessory[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<{ accessories: SelectedAccessory[]; image: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeAccessory, setActiveAccessory] = useState<string | null>(null);
  const [action, setAction] = useState<'move' | 'rotate' | 'scale' | null>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastClickedAccessory, setLastClickedAccessory] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [editingAvatarIndex, setEditingAvatarIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.removeItem('savedAvatars'); // Удаляем сохраненные аватары при первом запуске
    const saved = localStorage.getItem('savedAvatars');
    if (saved) {
      try {
        const parsedSaved = JSON.parse(saved);
        if (Array.isArray(parsedSaved)) {
          const validAvatars = parsedSaved.filter((avatar): avatar is { accessories: SelectedAccessory[]; image: string } => {
            return (
              typeof avatar === 'object' &&
              avatar !== null &&
              Array.isArray(avatar.accessories) &&
              typeof avatar.image === 'string'
            );
          });
          setSavedAvatars(validAvatars);
        }
      } catch (error) {
        console.error('Error parsing saved avatars:', error);
      }
    }
  }, []);

  const handleAccessoryClick = (accessory: Accessory) => {
    setSelectedAccessories(prev => {
      const existingIndex = prev.findIndex(item => item.id === accessory.id);
      if (existingIndex !== -1) {
        return prev.filter(item => item.id !== accessory.id);
      } else {
        return [...prev, { 
          ...accessory, 
          position: { x: 200, y: 200 },
          scale: accessory.category === 'Hats' ? 1.5 : 1, // Начальный масштаб для шапок больше
          rotation: 0 
        }];
      }
    });
  };

  const handleActiveAccessoryToggle = (id: string) => {
    if (!isDragging) {
      if (lastClickedAccessory === id) {
        setActiveAccessory(null);
        setLastClickedAccessory(null);
      } else {
        setActiveAccessory(id);
        setLastClickedAccessory(id);
      }
      setAction(null);
    }
  };

  const handleMouseDown = (e: React.MouseEvent, id: string, action: 'move' | 'rotate' | 'scale') => {
    e.stopPropagation();
    setActiveAccessory(id);
    setAction(action);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeAccessory && action && avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setSelectedAccessories(prev =>
        prev.map(item => {
          if (item.id === activeAccessory) {
            switch (action) {
              case 'move':
                return { 
                  ...item, 
                  position: { 
                    x: Math.max(0, Math.min(x - 50, rect.width - 100)),
                    y: Math.max(0, Math.min(y - 50, rect.height - 100))
                  } 
                };
              case 'rotate':
                const center = { 
                  x: item.position.x + 50, 
                  y: item.position.y + 50 
                };
                const angle = Math.atan2(y - center.y, x - center.x) * (180 / Math.PI);
                return { ...item, rotation: angle };
              case 'scale':
                const dx = x - (item.position.x + 50);
                const dy = y - (item.position.y + 50);
                const distance = Math.sqrt(dx * dx + dy * dy);
                // Увеличиваем максимальный масштаб для шапок
                const maxScale = item.category === 'Hats' ? 4 : 2;
                const newScale = Math.max(0.5, Math.min(maxScale, distance / 50));
                return { ...item, scale: newScale };
              default:
                return item;
            }
          }
          return item;
        })
      );
    }
  };

  const handleMouseUp = () => {
    setAction(null);
    setIsDragging(false);
  };

  const handleAvatarClick = (e: React.MouseEvent) => {
    if (e.target === avatarRef.current) {
      setActiveAccessory(null);
      setLastClickedAccessory(null);
    }
  };

  const captureAvatar = async () => {
    if (avatarRef.current) {
      setIsCapturing(true);
      try {
        // Сохраняем текущий активный аксессуар
        const currentActiveAccessory = activeAccessory;
        
        // Временно убираем активный аксессуар (и, следовательно, розовую обводку)
        setActiveAccessory(null);
        
        // Ждем, пока React обновит DOM
        await new Promise(resolve => setTimeout(resolve, 0));

        const canvas = await html2canvas(avatarRef.current, {
          backgroundColor: null,
          scale: 2,
        });
        const imageDataUrl = canvas.toDataURL('image/png');

        // Возвращаем активный аксессуар
        setActiveAccessory(currentActiveAccessory);

        return imageDataUrl;
      } catch (error) {
        console.error('Error capturing avatar:', error);
        setError('Failed to capture avatar image. Please try again.');
      } finally {
        setIsCapturing(false);
      }
    }
    return null;
  };

  const handleSaveAvatar = async () => {
    if (selectedAccessories.length > 0) {
      const imageDataUrl = await captureAvatar();
      if (imageDataUrl) {
        try {
          setSavedAvatars(prev => {
            const newAvatar = { accessories: selectedAccessories, image: imageDataUrl };
            const updatedAvatars = [...prev, newAvatar].slice(-5); // Ограничиваем до 5 последних аватаров
            localStorage.setItem('savedAvatars', JSON.stringify(updatedAvatars));
            return updatedAvatars;
          });
          setError(null); // Очищаем ошибку, если сохранение прошло успешно
        } catch (error) {
          console.error('Error saving avatar:', error);
          setError('Failed to save avatar. Storage quota might be exceeded.');
        }
      }
    } else {
      setError("Please select at least one accessory before saving!");
    }
  };

  const handleEditAvatar = (index: number) => {
    setEditingAvatarIndex(index);
    setSelectedAccessories(savedAvatars[index].accessories);
  };

  const handleUpdateAvatar = async () => {
    if (editingAvatarIndex !== null) {
      const imageDataUrl = await captureAvatar();
      if (imageDataUrl) {
        try {
          setSavedAvatars(prev => {
            const updatedAvatars = [...prev];
            updatedAvatars[editingAvatarIndex] = { accessories: selectedAccessories, image: imageDataUrl };
            localStorage.setItem('savedAvatars', JSON.stringify(updatedAvatars));
            return updatedAvatars;
          });
          setEditingAvatarIndex(null);
          setError(null); // Очищаем ошибку, если обновление прошло успешно
        } catch (error) {
          console.error('Error updating avatar:', error);
          setError('Failed to update avatar. Please try again.');
        }
      }
    }
  };

  const handleDeleteAvatar = (index: number) => {
    if (window.confirm("Are you sure you want to delete this avatar?")) {
      setSavedAvatars(prev => {
        const updatedAvatars = prev.filter((_, i) => i !== index);
        localStorage.setItem('savedAvatars', JSON.stringify(updatedAvatars));
        return updatedAvatars;
      });
    }
  };

  const handleMint = () => {
    alert("Minting functionality is not implemented yet.");
  };

  const buttonStyle = {
    fontFamily: '"Press Start 2P", cursive',
    boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
    textShadow: '2px 2px 0px #4B0082',
    border: '4px solid #9370DB'
  };

  const categories = ['All', ...Array.from(new Set(accessories.map(a => a.category)))];

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      {/* Main Avatar Display */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div 
          ref={avatarRef}
          className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleAvatarClick}
        >
          <Image
            src="/generator/nftbarbie.png"
            alt="NFT Barbie"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
          {selectedAccessories.map((accessory) => (
            <div 
              key={accessory.id}
              className={`absolute ${activeAccessory === accessory.id ? 'outline outline-2 outline-pink-500' : ''}`}
              style={{
                width: '100px',
                height: '100px',
                left: `${accessory.position.x}px`,
                top: `${accessory.position.y}px`,
                transform: `rotate(${accessory.rotation}deg) scale(${accessory.scale})`,
                zIndex: activeAccessory === accessory.id ? 10 : 1,
                cursor: action === 'move' ? 'move' : 'default',
                userSelect: 'none',
              }}
              onMouseDown={(e) => handleMouseDown(e, accessory.id, 'move')}
              onClick={(e) => {
                e.stopPropagation();
                handleActiveAccessoryToggle(accessory.id);
              }}
            >
              <Image 
                src={accessory.image}
                alt={accessory.name}
                fill
                style={{ objectFit: 'contain' }}
                draggable="false"
              />
              {activeAccessory === accessory.id && (
                <>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-500 rounded-full cursor-nwse-resize" onMouseDown={(e) => handleMouseDown(e, accessory.id, 'scale')} />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full cursor-nesw-resize" onMouseDown={(e) => handleMouseDown(e, accessory.id, 'scale')} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full cursor-nesw-resize" onMouseDown={(e) => handleMouseDown(e, accessory.id, 'scale')} />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500 rounded-full cursor-nwse-resize" onMouseDown={(e) => handleMouseDown(e, accessory.id, 'scale')} />
                  <div className="absolute top-1/2 -right-2 w-4 h-4 bg-pink-500 rounded-full cursor-e-resize" onMouseDown={(e) => handleMouseDown(e, accessory.id, 'rotate')} />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex space-x-4">
          {editingAvatarIndex !== null ? (
            <button 
              onClick={handleUpdateAvatar} 
              className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={buttonStyle}
            >
              Update Avatar
            </button>
          ) : (
            <button 
              onClick={handleSaveAvatar} 
              className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={buttonStyle}
            >
              Save Avatar
            </button>
          )}
          <button 
            onClick={handleMint} 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={buttonStyle}
          >
            Mint NFT
          </button>
        </div>
        {error && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
      </div>

      {/* Accessories Panel */}
      <div className="w-1/3 bg-gradient-to-b from-pink-300 to-purple-400 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>Customize Your Barbie</h2>
        
        {/* Categories */}
        <div className="flex mb-6 space-x-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-purple-700 text-white' : 'bg-pink-200 text-purple-700'}`}
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '10px' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-3 gap-4">
          {accessories
            .filter(accessory => activeCategory === 'All' || accessory.category === activeCategory)
            .map((accessory) => (
              <div 
                key={accessory.id} 
                className={`p-2 border-4 border-purple-700 rounded-lg cursor-pointer transition-all duration-300 ${selectedAccessories.some(item => item.id === accessory.id) ? 'bg-pink-300 scale-105' : 'bg-white hover:shadow-md'}`}
                onClick={() => handleAccessoryClick(accessory)}
              >
                <Image 
                  src={accessory.image} 
                  alt={accessory.name} 
                  width={96}
                  height={96}
                  style={{ objectFit: 'contain' }}
                  draggable="false" 
                />
                <p className="text-center text-sm font-bold text-purple-700" style={{ fontFamily: '"Press Start 2P", cursive' }}>{accessory.name}</p>
              </div>
            ))}
        </div>

        {/* Saved Avatars */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: '"Press Start 2P", cursive' }}>Saved Avatars</h3>
          <div className="grid grid-cols-3 gap-4">
            {savedAvatars.map((avatar, index) => (
              <div 
                key={index} 
                className="relative w-full aspect-square bg-white rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleEditAvatar(index)}
              >
                {isCapturing && editingAvatarIndex === index ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <Image 
                    src={avatar.image} 
                    alt={`Avatar ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <button 
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAvatar(index);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarGenerator;