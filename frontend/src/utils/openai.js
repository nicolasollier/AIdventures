import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = import.meta.env.VITE_OPENAI_API_URL;

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

export const postToOpenAI = async (messages) => {
  try {
    const response = await openai.post("", {
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    return response.data.choices[0].message;
  } catch (error) {
    console.error(error);
    throw new Error("Error in OpenAI API call");
  }
};