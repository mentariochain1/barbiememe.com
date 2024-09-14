"use client";

import React, { useState } from 'react';

const AvatarGenerator: React.FC = () => {
  const [avatarOptions, setAvatarOptions] = useState({
    hairStyle: 'default',
    hairColor: '#FFD700',
    skinTone: '#FFA07A',
    outfit: 'casual',
  });

  const handleOptionChange = (option: string, value: string) => {
    setAvatarOptions(prev => ({ ...prev, [option]: value }));
  };

  const generateAvatar = () => {
    // Здесь будет логика генерации аватара
    console.log('Generating avatar with options:', avatarOptions);
    // В будущем здесь можно добавить API-запрос или локальную генерацию изображения
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Hair Style</label>
        <select
          className="w-full p-2 border rounded"
          value={avatarOptions.hairStyle}
          onChange={(e) => handleOptionChange('hairStyle', e.target.value)}
        >
          <option value="default">Default</option>
          <option value="curly">Curly</option>
          <option value="straight">Straight</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Hair Color</label>
        <input
          type="color"
          value={avatarOptions.hairColor}
          onChange={(e) => handleOptionChange('hairColor', e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Skin Tone</label>
        <input
          type="color"
          value={avatarOptions.skinTone}
          onChange={(e) => handleOptionChange('skinTone', e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Outfit</label>
        <select
          className="w-full p-2 border rounded"
          value={avatarOptions.outfit}
          onChange={(e) => handleOptionChange('outfit', e.target.value)}
        >
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="sporty">Sporty</option>
        </select>
      </div>
      <button
        onClick={generateAvatar}
        className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition-colors"
      >
        Generate Avatar
      </button>
    </div>
  );
};

export default AvatarGenerator;