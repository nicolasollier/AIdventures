import React, { createContext, useState } from "react";

export const SidePanelContext = createContext();

export const SidePanelContextProvider = ({ children }) => {
  const [sidePanelState, setSidePanelState] = useState({
    isOpen: false,
  });

  const toggleSidePanel = () => {
    setSidePanelState({
      ...sidePanelState,
      isOpen: !sidePanelState.isOpen,
    });
  }

  return (
    <SidePanelContext.Provider value={{ sidePanelState, toggleSidePanel }}>
      {children}
    </SidePanelContext.Provider>
  );
}
