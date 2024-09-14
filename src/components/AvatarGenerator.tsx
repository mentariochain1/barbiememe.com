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
  { id: 'glasses4', name: 'DealWithIt', image: '/generator/barbieglasses2.png', category: 'Glasses' },
  { id: 'glasses5', name: 'Deal With It Real', image: '/generator/dealwithitreal.png', category: 'Glasses' },
  { id: 'glasses6', name: 'Glasses Two', image: '/generator/glassestwo.png', category: 'Glasses' },
  { id: 'glasses7', name: 'Snowboard', image: '/generator/snowboard.png', category: 'Glasses' },
  { id: 'hat2', name: 'Bunny Hat', image: '/generator/hatbarbie1.png', category: 'Hats' },
  { id: 'hat3', name: 'Baseball Cap', image: '/generator/SwagBaseball_.png', category: 'Hats' },
  { id: 'hat4', name: 'Barbie Hat', image: '/generator/hatbarbie1.png', category: 'Hats' },
  { id: 'hat5', name: 'Meme Hat 1', image: '/generator/hatmeme1.png', category: 'Hats' },
  { id: 'hat6', name: 'Meme Hat 2', image: '/generator/hatmeme3.png', category: 'Hats' },
];

function AvatarGenerator() {
  const [selectedAccessories, setSelectedAccessories] = useState<SelectedAccessory[]>([]);
  const [savedAvatars, setSavedAvatars] = useState<{ accessories: SelectedAccessory[]; image: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeAccessory, setActiveAccessory] = useState<string | null>(null);
  const [action, setAction] = useState<'move' | 'rotate' | 'scale' | null>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [editingAvatarIndex, setEditingAvatarIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 844);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
    if (action) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [action]);

  const handleAccessoryClick = (accessory: Accessory) => {
    setSelectedAccessories(prev => {
      const existingIndex = prev.findIndex(item => item.id === accessory.id);
      if (existingIndex !== -1) {
        return prev.filter(item => item.id !== accessory.id);
      } else {
        return [...prev, { 
          ...accessory, 
          position: { x: 200, y: 200 },
          scale: accessory.category === 'Hats' ? 3 : 2, // Увеличиваем начальный масштаб
          rotation: 0 
        }];
      }
    });
  };

  const handleAvatarClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === avatarRef.current) {
      setActiveAccessory(null);
    }
  };

  const avatarSize = isMobile ? 280 : 500;
  const accessorySize = isMobile ? 112 : 200;

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (activeAccessory && action && avatarRef.current) {
      e.preventDefault();
      e.stopPropagation();
      const rect = avatarRef.current.getBoundingClientRect();
      let x, y;
      if ('touches' in e) {
        const touch = e.touches[0];
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }

      const scaleFactor = isMobile ? 0.466667 : 0.833333;

      setSelectedAccessories(prev =>
        prev.map(item => {
          if (item.id === activeAccessory) {
            switch (action) {
              case 'move':
                return { 
                  ...item, 
                  position: { 
                    x: Math.max(0, Math.min(x / scaleFactor, 600 - accessorySize)),
                    y: Math.max(0, Math.min(y / scaleFactor, 600 - accessorySize))
                  } 
                };
              case 'rotate':
                const center = { 
                  x: item.position.x * scaleFactor + accessorySize / 2,
                  y: item.position.y * scaleFactor + accessorySize / 2
                };
                const angle = Math.atan2(y - center.y, x - center.x) * (180 / Math.PI);
                return { ...item, rotation: angle };
              case 'scale':
                const dx = x - (item.position.x * scaleFactor + accessorySize / 2);
                const dy = y - (item.position.y * scaleFactor + accessorySize / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const newScale = distance / (accessorySize / 2);
                return { ...item, scale: Math.max(0.1, newScale) };
              default:
                return item;
            }
          }
          return item;
        })
      );
    }
  };

  const handleEnd = () => {
    setAction(null);
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent, id: string, newAction: 'move' | 'rotate' | 'scale') => {
    e.stopPropagation();
    setActiveAccessory(id);
    setAction(newAction);
  };

  const captureAvatar = async () => {
    if (avatarRef.current) {
      setIsCapturing(true);
      try {
        const currentActiveAccessory = activeAccessory;
        setActiveAccessory(null);
        await new Promise(resolve => setTimeout(resolve, 100)); // Небольшая задержка

        const canvas = await html2canvas(avatarRef.current, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
          logging: false,
          allowTaint: true,
          foreignObjectRendering: true,
        });

        // Создаем новый canvas для обложки
        const coverCanvas = document.createElement('canvas');
        const ctx = coverCanvas.getContext('2d');
        coverCanvas.width = 600;
        coverCanvas.height = 600;

        if (ctx) {
          // Рисуем градиентный фон
          const gradient = ctx.createLinearGradient(0, 0, 600, 600);
          gradient.addColorStop(0, '#f472b6'); // pink-400
          gradient.addColorStop(1, '#9333ea'); // purple-600
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 600, 600);

          // Рисуем захваченный аватар в центре
          const scale = Math.min(500 / canvas.width, 500 / canvas.height);
          const x = (600 - canvas.width * scale) / 2;
          const y = (600 - canvas.height * scale) / 2;
          ctx.drawImage(canvas, x, y, canvas.width * scale, canvas.height * scale);
        }

        const imageDataUrl = coverCanvas.toDataURL('image/png');
        setActiveAccessory(currentActiveAccessory);
        return imageDataUrl;
      } catch (error) {
        console.error('Ошибка при захвате аватара:', error);
        setError('Не удалось захватить изображение аватара. Пожалуйста, попробуйте еще раз.');
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
            const updatedAvatars = [...prev, newAvatar].slice(-5); // Огранииваем до 5 последних аватаров
            localStorage.setItem('savedAvatars', JSON.stringify(updatedAvatars));
            return updatedAvatars;
          });
          setError(null); // Очищаем ошибку, если сохранение прошло успшно
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
    boxShadow: '0 0 0 2px #8A2BE2, 0 0 0 4px #4B0082',
    textShadow: '1px 1px 0px #4B0082',
    border: '2px solid #9370DB'
  };

  const categories = ['All', 'Glasses', 'Hats'];

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-screen bg-gradient-to-br from-pink-400 to-purple-600 overflow-hidden touch-none`}>
      {/* Main Avatar Display */}
      <div className={`${isMobile ? 'flex-1' : 'w-2/3'} flex flex-col items-center justify-center p-4 touch-none`}>
        <div 
          ref={avatarRef}
          className={`relative bg-white rounded-lg shadow-lg overflow-hidden touch-none`}
          style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
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
                width: `${accessorySize}px`,
                height: `${accessorySize}px`,
                left: `${accessory.position.x * (isMobile ? 0.466667 : 0.833333) - accessorySize / 4}px`,
                top: `${accessory.position.y * (isMobile ? 0.466667 : 0.833333) - accessorySize / 4}px`,
                transform: `rotate(${accessory.rotation}deg) scale(${accessory.scale * (isMobile ? 0.466667 : 0.833333)})`,
                zIndex: activeAccessory === accessory.id ? 10 : 1,
                userSelect: 'none',
              }}
              onMouseDown={(e) => handleStart(e, accessory.id, 'move')}
              onTouchStart={(e) => handleStart(e, accessory.id, 'move')}
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
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-pink-500 rounded-full" 
                    onMouseDown={(e) => handleStart(e, accessory.id, 'scale')}
                    onTouchStart={(e) => handleStart(e, accessory.id, 'scale')} 
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full" 
                    onMouseDown={(e) => handleStart(e, accessory.id, 'scale')}
                    onTouchStart={(e) => handleStart(e, accessory.id, 'scale')} 
                  />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full" 
                    onMouseDown={(e) => handleStart(e, accessory.id, 'scale')}
                    onTouchStart={(e) => handleStart(e, accessory.id, 'scale')} 
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-500 rounded-full" 
                    onMouseDown={(e) => handleStart(e, accessory.id, 'scale')}
                    onTouchStart={(e) => handleStart(e, accessory.id, 'scale')} 
                  />
                  <div className="absolute top-1/2 -right-1 w-3 h-3 bg-pink-500 rounded-full" 
                    onMouseDown={(e) => handleStart(e, accessory.id, 'rotate')}
                    onTouchStart={(e) => handleStart(e, accessory.id, 'rotate')} 
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className={`mt-4 flex flex-wrap justify-center gap-2 ${isMobile ? '' : 'w-1/2'}`}>
          {editingAvatarIndex !== null ? (
            <button 
              onClick={handleUpdateAvatar} 
              className="px-3 py-2 bg-purple-500 text-white font-bold text-xs rounded-md transition-all duration-300 active:scale-95"
              style={buttonStyle}
            >
              Update
            </button>
          ) : (
            <button 
              onClick={handleSaveAvatar} 
              className="px-3 py-2 bg-purple-500 text-white font-bold text-xs rounded-md transition-all duration-300 active:scale-95"
              style={buttonStyle}
            >
              Save
            </button>
          )}
          <button 
            onClick={handleMint} 
            className="px-3 py-2 bg-purple-500 text-white font-bold text-xs rounded-md transition-all duration-300 active:scale-95"
            style={buttonStyle}
          >
            Mint NFT
          </button>
          <button 
            onClick={() => window.history.back()}
            className="px-3 py-2 bg-purple-500 text-white font-bold text-xs rounded-md transition-all duration-300 active:scale-95"
            style={buttonStyle}
          >
            Back
          </button>
        </div>
        {error && (
          <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-xs">
            {error}
          </div>
        )}
      </div>

      {/* Accessories Panel */}
      <div className={`${isMobile ? 'h-2/5' : 'w-1/3 h-full'} bg-gradient-to-b from-pink-300 to-purple-400 p-4 overflow-y-auto`}>
        <h2 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold mb-2 text-white sega-barbie-title`}>Customize Your Barbie</h2>
        
        {/* Categories */}
        <div className="flex mb-2 space-x-1 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 py-1 rounded-full ${isMobile ? 'text-xs' : 'text-sm'} ${activeCategory === category ? 'bg-purple-700 text-white' : 'bg-pink-200 text-purple-700'} transition-all duration-300 active:scale-95`}
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: isMobile ? '8px' : '12px' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accessories Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-4' : 'grid-cols-3'} gap-2`}>
          {accessories
            .filter(accessory => activeCategory === 'All' || accessory.category === activeCategory)
            .map((accessory) => (
              <div 
                key={accessory.id} 
                className={`p-1 border-2 border-purple-700 rounded-lg transition-all duration-300 ${selectedAccessories.some(item => item.id === accessory.id) ? 'bg-pink-300 scale-105' : 'bg-white'}`}
                onClick={() => handleAccessoryClick(accessory)}
              >
                <Image 
                  src={accessory.image} 
                  alt={accessory.name} 
                  width={isMobile ? 40 : 60}
                  height={isMobile ? 40 : 60}
                  style={{ objectFit: 'contain' }}
                  draggable="false" 
                  className="pixelated"
                />
                <p className={`text-center ${isMobile ? 'text-[8px]' : 'text-xs'} font-bold text-purple-700 pixel-font truncate`}>{accessory.name}</p>
              </div>
            ))}
        </div>

        {/* Saved Avatars */}
        <div className="mt-2">
          <h3 className={`${isMobile ? 'text-sm' : 'text-lg'} font-bold mb-2 text-white sega-barbie-title`}>Saved Avatars</h3>
          <div className={`grid ${isMobile ? 'grid-cols-4' : 'grid-cols-3'} gap-2`}>
            {savedAvatars.map((avatar, index) => (
              <div 
                key={index} 
                className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-neon-pink"
                onClick={() => handleEditAvatar(index)}
              >
                {isCapturing && editingAvatarIndex === index ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <Image 
                      src={avatar.image} 
                      alt={`Avatar ${index + 1}`} 
                      layout="fill"
                      objectFit="contain"
                      className="pixelated"
                    />
                  </div>
                )}
                <button 
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
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