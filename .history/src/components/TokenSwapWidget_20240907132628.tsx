"use client";

import React, { useEffect } from 'react';

const TokenSwapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ton-defi.github.io/embed-sdk/dist/embed-sdk.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.TONEmbedSDK.init({
        rootElement: document.getElementById('stonfi-widget'),
        projectId: 'YOUR_PROJECT_ID', // Замените на ваш реальный Project ID от Stonfi
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