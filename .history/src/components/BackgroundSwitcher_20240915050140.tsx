"use client";

import React, { ReactNode } from 'react';

interface BackgroundSwitcherProps {
  children: React.ReactNode;
  isCalmBackground?: boolean; // Добавьте это свойство в интерфейс
}

const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ children, isCalmBackground }) => {
  // Используйте isCalmBackground в логике компонента, а не передавайте его напрямую в div
  return (
    <div className={isCalmBackground ? 'calm-background' : 'dynamic-background'}>
      {children}
    </div>
  );
};

export default BackgroundSwitcher;