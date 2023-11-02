import axios from "axios";
import { conversation } from "../services/conversation";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const HISTORY_LENGTH = 30;

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export const initConversation = async (setConversation) => {
  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: conversation,
    });

    const newMessage = response.data.choices[0].message;
    const updatedConversation = [...conversation, newMessage];

    setConversation(updatedConversation);
  } catch (error) {
    console.error(error);
    return "Error while initializing conversation";
  }
};

export const updateConversation = async (
  userChoice,
  currentConversation,
  setConversation,
) => {
  try {
    let updatedConversation = [
      ...currentConversation,
      { role: "user", content: userChoice },
    ];
    setConversation(updatedConversation);

    if (updatedConversation.length > HISTORY_LENGTH) {
        updatedConversation = [updatedConversation[0]].concat(updatedConversation.slice(-(HISTORY_LENGTH-1)));
    }

    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: updatedConversation,
    });

    const newMessage = response.data.choices[0].message;
    updatedConversation = [...updatedConversation, newMessage];

    setConversation(updatedConversation);
  } catch (error) {
    console.error(error);
    return "Error while updating conversation";
  }
};
