"use client";

import React, { useEffect } from 'react';

const TokenSwapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ton-defi.github.io/embed-sdk/dist/embed-sdk.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-expect-error: TONEmbedSDK is not recognized by TypeScript
      window.TONEmbedSDK.init({
        rootElement: document.getElementById('stonfi-widget'),
        projectId: 'random_project_id_123', // Случайный Project ID для демонстрации
        theme: 'DARK',
        language: 'en',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <div id="stonfi-widget" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default TokenSwapWidget;