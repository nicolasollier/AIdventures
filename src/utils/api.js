import axios from "axios";
import { conversation, extractOptions, removeOptionsFromMessage, checkConversationValidity } from "../services/conversation";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export const initConversation = async (setConversation, setOptions) => {
  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: conversation,
    });

    const newMessage = response.data.choices[0].message;
    const extractedOptions = extractOptions(newMessage);

    removeOptionsFromMessage(newMessage, extractedOptions);

    const updatedConversation = [...conversation, newMessage];

    setOptions(extractedOptions);
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
  setOptions,
) => {
  try {
    checkConversationValidity(currentConversation, userChoice);

    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: currentConversation,
    });

    const newMessage = response.data.choices[0].message;
    const extractedOptions = extractOptions(newMessage);

    removeOptionsFromMessage(newMessage, extractedOptions);

    const updatedConversation = [...currentConversation, newMessage];

    setOptions(extractedOptions);
    setConversation(updatedConversation);
  } catch (error) {
    console.error(error);
    return "Error while updating conversation";
  }
};