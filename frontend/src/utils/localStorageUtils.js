export const getConversationId = () => {
  const conversationId = localStorage.getItem("conversationId");
  return conversationId;
};

export const setConversationId = (id) => {
  localStorage.setItem("conversationId", id);
};
