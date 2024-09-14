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
    console.log('Generating avatar with options:', avatarOptions);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex gap-8">
      <div className="w-1/2 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
        <div className="w-64 h-64 bg-black rounded-lg"></div>
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 pixel-font">Hair Style</label>
          <select
            className="w-full p-2 border rounded pixel-font"
            value={avatarOptions.hairStyle}
            onChange={(e) => handleOptionChange('hairStyle', e.target.value)}
          >
            <option value="default">Default</option>
            <option value="curly">Curly</option>
            <option value="straight">Straight</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 pixel-font">Hair Color</label>
          <input
            type="color"
            value={avatarOptions.hairColor}
            onChange={(e) => handleOptionChange('hairColor', e.target.value)}
            className="w-full h-10 pixel-border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 pixel-font">Skin Tone</label>
          <input
            type="color"
            value={avatarOptions.skinTone}
            onChange={(e) => handleOptionChange('skinTone', e.target.value)}
            className="w-full h-10 pixel-border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 pixel-font">Outfit</label>
          <select
            className="w-full p-2 border rounded pixel-font"
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
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition-colors pixel-font pixel-border"
        >
          Generate Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;