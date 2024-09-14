"use client";

import React, { useState, ReactNode } from 'react';

interface BackgroundSwitcherProps {
  children: ReactNode;
}

const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ children }) => {
  const [isCalmBackground, setIsCalmBackground] = useState(false);

  return (
    <>
      <div className={`transition-all duration-500 ${isCalmBackground ? 'bg-pink-100' : ''}`}>
        {React.Children.map(children, child =>
          React.isValidElement(child) ? React.cloneElement(child, { isCalmBackground }) : child
        )}
      </div>
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