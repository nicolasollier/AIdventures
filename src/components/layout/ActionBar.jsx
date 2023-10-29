import { Box, Spinner, Button } from "@chakra-ui/react";
import { updateConversation } from "../../utils/api";

const ActionBar = ({
  isLoading,
  setIsLoading,
  conversation,
  setConversation,
}) => {
  function handleOptionClick(option) {
    setIsLoading(true);
    updateConversation(option, conversation, setConversation).then(() =>
      setIsLoading(false)
    );
  }

  const renderOptions = () => {
    const assistantMessage = conversation
      .slice()
      .reverse()
      .find((message) => message.role === "assistant");

    if (assistantMessage && assistantMessage.options) {
      return assistantMessage.options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleOptionClick(option)}
          fontSize={"sm"}
          color={"white"}
          bg={"gray.700"}
          variant="solid"
          mb={2}
          _hover={{
            bg: "gray.500",
          }}
        >
          {option}
        </Button>
      ));
    }

    return null;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      bottom={0}
      position={"fixed"}
      bg={"gray.800"}
      p={8}
    >
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.700"
          color="white"
          size="md"
        />
      ) : (
        renderOptions()
      )}
    </Box>
  );
};

export default ActionBar;
