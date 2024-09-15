"use client";

import React from 'react';

interface BackgroundSwitcherProps {
  children: React.ReactNode;
  isCalmBackground?: boolean;
}

const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ children, isCalmBackground }) => {
  return (
    <div className={isCalmBackground ? 'calm-background' : 'dynamic-background'}>
      {children}
    </div>
  );
};

export default BackgroundSwitcher;