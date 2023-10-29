import { Box, Text } from "@chakra-ui/react";
import ActionBar from "./layout/ActionBar";
import { initConversation } from "../utils/api";
import { useEffect, useState } from "react";
import { useConversation } from "../hooks/useConversation";

const Chatbox = () => {
  const { conversation, setConversation } = useConversation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    initConversation(setConversation).then(() => setIsLoading(false));
  }, []);

  return (
    <Box
      zIndex={5}
      display={"flex"}
      position={"relative"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      flex={1}
      overflowY={"auto"}
      py={[3, 6]}
      px={[6, 12]}
    >
      {conversation
        .filter((message) => message.role !== "system")
        .map((message, index) => (
          <Box key={index} mb={4} maxWidth={["100%", "100%", "80%"]}>
            {message.role === "user" ? (
              <Text fontStyle="italic" color="gray.500">
                Vous: {message.content}
              </Text>
            ) : (
              <Text mb={2} fontSize={["xs", "sm", "md"]}>
                {message.content}
              </Text>
            )}
          </Box>
        ))}

      <ActionBar
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        conversation={conversation}
        setConversation={setConversation}
      />
    </Box>
  );
};

export default Chatbox;
