export function cleanConversation(conversation) {
  return conversation.map((message) => {
    if (message.role === "assistant") {
      const { options, ...rest } = message;
      return rest;
    }
    return message;
  });
}
