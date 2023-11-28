import axios from "axios";
import { contextPrompt } from "../utils/contextPrompt";
import { v4 as uuidv4 } from "uuid";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = import.meta.env.VITE_OPENAI_API_URL;
// const HISTORY_LENGTH = import.meta.env.VITE_HISTORY_LENGTH;

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

const api = axios.create({
  baseURL: "/api",
});

const conversationId = localStorage.getItem("conversationId");
const playerInfos = localStorage.getItem("playerInfos");

export const initConversation = async () => {
  try {
    if (conversationId) {
      const response = await api.get(`/conversation`, {
        params: { conversationId: conversationId },
      });

      return response.data;

    } else if (!conversationId) {
      const newConversation = [
        { role: "system", content: contextPrompt },
        { role: "system", content: playerInfos },
      ]
      
      const gptResponse = await openai.post("", {
        model: "gpt-3.5-turbo",
        messages: newConversation,
      });

      const newMessage = gptResponse.data.choices[0].message;
      newConversation.push(newMessage);

      const response = await api.post(`/conversation`, {
        id: uuidv4(),
        messages: newConversation,
      });

      localStorage.setItem("conversationId", response.data._id);
      return response.data.messages;
    }
  } catch (error) {
    console.error(error);
    return "Error while initializing conversation";
  }
};

export const updateConversation = async (playerResponse) => {
  try {
    let updatedConversation = [];

    const response = await api.get(`/conversation`, {
      params: { conversationId: conversationId },
    });

    updatedConversation = [
      ...response.data,
      { role: "user", content: playerResponse },
    ];
    
    //filter updatedConversation to remove _id and timestamp and be compliant to GPT
    updatedConversation = updatedConversation.map((message) => {
      return { role: message.role, content: message.content };
    });


    const gptResponse = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: updatedConversation,
    });

    const newMessage = gptResponse.data.choices[0].message;
    updatedConversation.push(newMessage);

    // if (updatedConversation.length > HISTORY_LENGTH) {
    //   updatedConversation = updatedConversation.slice(
    //     updatedConversation.length - HISTORY_LENGTH
    //   );
    // }

    await api.put(`/conversation`, {
      id: conversationId,
      messages: updatedConversation,
    });

    console.log(updatedConversation)
    return updatedConversation;
    
  } catch (error) {
    console.error(error);
    return "Error while updating conversation";
  }
};
