import axios from "axios";
import { conversation, extractOptions, removeOptionsFromMessage } from "../services/conversation";

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
    if (userChoice === "Laisser faire le destin") {
      currentConversation = [
        ...currentConversation,
        {
          role: "system",
          content: `Tu viens de ne pas respecter le format demandé, n'oublie pas: Exemple AUTORISE 1:
            "Lors d'une marche à travers une forêt dense, un corbeau noir se pose devant vous, portant une lettre."
            ["option 1": "Prendre la lettre", "option 2": "Chasser le corbeau", "option 3": "Continuer sans s'arrêter"];`,
        },
        { role: "user", content: userChoice },
      ];
    } else {
      currentConversation = [...currentConversation, { role: "user", content: userChoice }];
    }

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
