"use client";

import React, { useEffect, useState } from 'react';

const TokenSwapWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        const response = await fetch('https://ton-defi.github.io/embed-sdk/dist/embed-sdk.js');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const script = document.createElement('script');
        script.text = await response.text();
        document.body.appendChild(script);

        // @ts-expect-error: TONEmbedSDK is not recognized by TypeScript
        window.TONEmbedSDK.init({
          rootElement: document.getElementById('stonfi-widget'),
          projectId: 'random_project_id_123', // Случайный Project ID для демонстрации
          theme: 'DARK',
          language: 'en',
        });

        setIsLoaded(true);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      }
    };

    loadWidget();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-12 bg-purple-900 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Token Swap Widget
      </h2>
      <div 
        id="stonfi-widget" 
        style={{ width: '100%', height: '400px', border: '2px solid #FF69B4' }}
      >
        {!isLoaded && !error && (
          <p className="text-white text-center">Loading Stonfi widget...</p>
        )}
        {error && (
          <p className="text-red-500 text-center">Error loading widget: {error}</p>
        )}
      </div>
    </div>
  );
};

export default TokenSwapWidget;