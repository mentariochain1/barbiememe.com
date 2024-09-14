"use client";

import React, { useState } from 'react';

interface BackgroundSwitcherProps {
  children: (isCalmBackground: boolean) => React.ReactNode;
}

const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ children }) => {
  const [isCalmBackground, setIsCalmBackground] = useState(false);

  return (
    <>
      {children(isCalmBackground)}
      <button
        className="fixed bottom-4 right-4 px-4 py-2 bg-white text-pink-500 rounded-full shadow-lg"
        onClick={() => setIsCalmBackground(!isCalmBackground)}
      >
        {isCalmBackground ? "Energetic Mode" : "Calm Mode"}
      </button>
    </>
  );
};

export default BackgroundSwitcher;