import { Box, Spinner, Button } from "@chakra-ui/react";
import { updateConversation } from "../../utils/api";

const ActionBar = ({
  isLoading,
  setIsLoading,
  conversation,
  setConversation,
  options,
  setOptions,
}) => {
  function handleOptionClick(option) {
    setIsLoading(true);
    updateConversation(option, conversation, setConversation, setOptions).then(
      () => setIsLoading(false)
    );
  }

  const renderOptions = () => {
    if (options && options.length) {
      return options.map((option, index) => {
        const extractedText = option.replace(/^"|"$/g, '');
        return (
          <Button
            key={index}
            onClick={() => handleOptionClick(extractedText)}
            fontSize={"xs"}
            color={"white"}
            bg={"gray.700"}
            variant="solid"
            mb={2}
            _hover={{
              bg: "gray.500",
            }}
          >
            {extractedText}
          </Button>
        );
      });
    }

    return null;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      maxWidth={"1440px"}
      bottom={0}
      position={"fixed"}
      bg={"gray.900"}
      p={8}
    >
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.300"
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
