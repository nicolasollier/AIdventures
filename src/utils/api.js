import axios from "axios";
import { cleanConversation } from "../services/cleanConversation";
import { conversation } from "../services/conversation";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

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

    const messageText = response.data.choices[0].message.content;

    const optionsMatches = messageText.match(
      /option\s?\d+:\s?.+?(?=option\s?\d+:|$)/gis
    );

    let content, options;

    if (optionsMatches && optionsMatches.length) {
      content = messageText
        .substring(0, messageText.indexOf(optionsMatches[0]))
        .trim();
      options = optionsMatches.map((opt) =>
        opt.split(":")[1].replace(/"/g, "").trim()
      );
    } else {
      content = messageText;
      options = [];
    }

    const updatedMessage = {
      role: "assistant",
      content,
      options,
    };

    const updatedConversation = [...conversation, updatedMessage];
    setConversation(updatedConversation);
  } catch (error) {
    console.error(error);
    return "Error while initializing conversation";
  }
};

export const updateConversation = async (
  userChoice,
  currentConversation,
  setConversation
) => {
  try {
    currentConversation = cleanConversation(currentConversation);
    currentConversation = [
      ...currentConversation,
      { role: "user", content: userChoice },
    ];

    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: currentConversation,
    });

    const messageText = response.data.choices[0].message.content;

    const optionsMatches = messageText.match(
      /option\s?\d+:\s?.+?(?=option\s?\d+:|$)/gis
    );

    let content, options;

    if (optionsMatches && optionsMatches.length) {
      content = messageText
        .substring(0, messageText.indexOf(optionsMatches[0]))
        .trim();
      options = optionsMatches.map((opt) =>
        opt.split(":")[1].replace(/"/g, "").trim()
      );
    } else {
      content = messageText;
      options = [];
    }

    const updatedMessage = {
      role: "assistant",
      content,
      options,
    };

    const updatedConversation = [...currentConversation, updatedMessage];
    setConversation(updatedConversation);
  } catch (error) {
    console.error(error);
    return "Error while updating conversation";
  }
};
