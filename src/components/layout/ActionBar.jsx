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

  const options = ["Option 1", "Option 2", "Option 3"];

  const renderOptions = () => {
    if (options && options.length) {
      return options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleOptionClick(option)}
          fontSize={"xs"}
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
