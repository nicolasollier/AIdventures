import { Box, Text, Button, Spinner } from "@chakra-ui/react";
import { initConversation, updateConversation } from "../utils/api";
import { useEffect, useState } from "react";
import { useConversation } from "../hooks/useConversation";

const Chatbox = () => {
  const { conversation, setConversation } = useConversation();
  const [isLoading, setIsLoading] = useState(true);

  function handleOptionClick(option) {
    setIsLoading(true);
    updateConversation(option, setConversation).then(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    initConversation(setConversation).then(() => setIsLoading(false));
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      overflowY={"auto"}
      py={"6"}
      px={"12"}
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.600"
            color="white"
          />
        </Box>
      ) : (
        conversation
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
          ))
      )}
    </Box>
  );
};

export default Chatbox;
