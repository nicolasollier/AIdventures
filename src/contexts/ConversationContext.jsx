import React, { createContext, useState } from 'react';

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);
  const [options, setOptions] = useState([]);

  return (
    <ConversationContext.Provider value={{ conversation, setConversation, options, setOptions }}>
      {children}
    </ConversationContext.Provider>
  );
};