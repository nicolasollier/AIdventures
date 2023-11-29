import axios from "axios";
import { getConversationId } from "./localStorageUtils";

const api = axios.create({
  baseURL: "/api",
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error while register", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    const conversationId = await getConversationId();

    if (conversationId) {
      window.location.href = "/conversation";
    } else {
      window.location.href = "/";
    }

    return response.data;
  } catch (error) {
    console.error("Error while login", error);
    throw error;
  }
};
