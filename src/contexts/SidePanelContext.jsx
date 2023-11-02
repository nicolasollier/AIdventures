import React, { createContext, useState } from 'react';

export const SidePanelContext = createContext();

export const SidePanelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidePanelContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidePanelContext.Provider>
  );
}