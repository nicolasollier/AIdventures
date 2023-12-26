import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
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

  const clearPlayerInfos = () => {
    localStorage.removeItem("playerInfos");
    setPlayerInfos({
      hp: 100,
      activeQuest: "N/A",
      equipment: "N/A",
      name: "",
      race: "",
      gender: "",
      class: "",
      alignment: "",
    });
  };

  return (
    <PlayerContext.Provider
      value={{ playerInfos, setPlayerInfos, clearPlayerInfos }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
