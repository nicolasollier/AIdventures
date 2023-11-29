export const getConversationId = () => {
  return localStorage.getItem("conversationId");
};

export const setConversationId = (id) => {
  localStorage.setItem("conversationId", id);
};