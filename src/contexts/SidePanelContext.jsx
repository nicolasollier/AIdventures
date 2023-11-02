import React, { createContext, useState } from 'react';

export const SidePanelContext = createContext();

export const SidePanelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerInfos, setPlayerInfos] = useState({
    hp: 100,
    activeQuest: "Non renseigné",
    equipment: "Non renseigné",
  });

  return (
    <SidePanelContext.Provider value={{ isOpen, setIsOpen, playerInfos, setPlayerInfos }}>
      {children}
    </SidePanelContext.Provider>
  );
}