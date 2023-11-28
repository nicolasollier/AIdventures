import { useContext } from "react";
import { ConversationContext } from "../contexts/ConversationContext";

export const useConversation = () => {
  return useContext(ConversationContext);
};