import axios from "axios";
import { conversation, handlePlayerInfos } from "../services/conversation";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const HISTORY_LENGTH = 21;

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export const initConversation = async (setConversation, playerInfos) => {
  let isFromInit = true;
  handlePlayerInfos(playerInfos, conversation, isFromInit);

  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: conversation,
    });

    const newMessage = response.data.choices[0].message;
    const updatedConversation = [...conversation, newMessage];

    setConversation(updatedConversation);
    console.log(updatedConversation)
  } catch (error) {
    console.error(error);
    return "Error while initializing conversation";
  }
};

export const updateConversation = async (
  playerChoice,
  currentConversation,
  setConversation,
  playerInfos
) => {
  let isFromInit = false;
  handlePlayerInfos(playerInfos, currentConversation, isFromInit);

  try {
    let updatedConversation = [
      ...currentConversation,
      { role: "user", content: playerChoice },
    ];
    setConversation(updatedConversation);

    if (updatedConversation.length > HISTORY_LENGTH) {
      updatedConversation = updatedConversation.slice(0, 2).concat(
        updatedConversation.slice(2).slice(-(HISTORY_LENGTH - 2))
      );
    }

    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: updatedConversation,
    });

    const newMessage = response.data.choices[0].message;
    updatedConversation = [...updatedConversation, newMessage];

    setConversation(updatedConversation);
    console.log(updatedConversation)
  } catch (error) {
    console.error(error);
    return "Error while updating conversation";
  }
};
