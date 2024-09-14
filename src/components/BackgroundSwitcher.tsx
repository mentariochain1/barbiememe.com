"use client";

import React, { ReactNode } from 'react';

interface BackgroundSwitcherProps {
  children: ReactNode;
}

interface ChildProps {
  isCalmBackground?: boolean;
}

const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ children }) => {
  return (
    <>
      <div>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<ChildProps>, { isCalmBackground: false })
            : child
        )}
      </div>
    </>
  );
};

export default BackgroundSwitcher;