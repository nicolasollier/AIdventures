import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerInfos, setPlayerInfos] = useState({
    hp: 100,
    activeQuest: "N/A",
    equipment: "N/A",
    name: "",
    race: "",
    gender: "",
    class: "",
    alignment: "",
  });

  return (
    <PlayerContext.Provider
      value={{ isOpen, setIsOpen, playerInfos, setPlayerInfos }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
