import React, { createContext, useState } from 'react';

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);
  
  const clearConversation = () => {
    setConversation([]);
  }

  return (
    <ConversationContext.Provider value={{ conversation, setConversation, clearConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};