import { Box, Text, Button } from "@chakra-ui/react";
import { initConversation } from "../utils/api";
import { useEffect } from "react";
import { useConversation } from "../hooks/useConversation";

const Chatbox = () => {
  const { conversation, setConversation } = useConversation();

  function handleOptionClick(option) {
    console.log(option);
  }

  useEffect(() => {
    console.log(conversation);
  }, [conversation]);

  useEffect(() => {
    initConversation(setConversation);
  }, []);

  return (
    <Box
      flex={"1"}
      width={"100%"}
      overflowY={"auto"}
      py={"6"}
      px={"12"}
      justifyContent={"space-between"}
    >
      {conversation
        .filter((message) => message.role !== "system")
        .map((message, index) => (
          <Box key={index} mb={4}>
            <Text mb={2}>{message.content}</Text>
            {message.options && message.options.length > 0 && (
              <Box display={"flex"} flexDirection={"column"} mt={24}>
                {message.options.map((option, optionIndex) => (
                  <Button
                    onClick={() => handleOptionClick(option)}
                    key={optionIndex}
                    colorScheme="gray"
                    variant="outline"
                    fontSize="sm"
                    fontWeight="normal"
                    color="white"
                    borderColor="gray.700"
                    _hover={{ bg: "gray.700" }}
                    p={4}
                    mr={2}
                    mb={2}
                  >
                    {option}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default Chatbox;
