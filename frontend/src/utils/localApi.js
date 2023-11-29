import axios from "axios";
import { postToOpenAI } from "./openai";
import { getConversationId, setConversationId } from "./localStorageUtils";
import { contextPrompt } from "./contextPrompt";
import { v4 as uuidv4 } from "uuid";

const HISTORY_LENGTH = import.meta.env.VITE_HISTORY_LENGTH;
const api = axios.create({
  baseURL: "/api",
});

export const initConversation = async () => {
  const conversationId = getConversationId();

  if (conversationId) {
    const response = await api.get(`/conversation`, {
      params: { conversationId: conversationId },
    });

    return response.data;
  } else {
    const playerInfos = localStorage.getItem("playerInfos");
    const newConversation = [
      { role: "system", content: contextPrompt },
      { role: "system", content: playerInfos },
    ];

    const newMessage = await postToOpenAI(newConversation);
    newConversation.push({ role: "assistant", content: newMessage.content });

    console.log(newConversation)
    const response = await api.post(`/conversation`, {
      id: uuidv4(),
      messages: newConversation,
    });

    setConversationId(response.data._id);
    return response.data.messages;
  }
};

export const updateConversation = async (playerResponse) => {
  const conversationId = getConversationId();
  let updatedConversation = [];

  const response = await api.get(`/conversation`, {
    params: { conversationId: conversationId },
  });

  updatedConversation = [
    ...response.data,
    { role: "user", content: playerResponse },
  ];

  updatedConversation = updatedConversation.map((message) => {
    return { role: message.role, content: message.content };
  });

  const newMessage = await postToOpenAI(updatedConversation);
  updatedConversation.push({ role: "assistant", content: newMessage.content });

  if (updatedConversation.length > HISTORY_LENGTH) {
    updatedConversation = updatedConversation
      .slice(0, 2)
      .concat(updatedConversation.slice(2));
  }

  await api.put(`/conversation`, {
    id: conversationId,
    messages: updatedConversation,
  });

  return updatedConversation;
};
