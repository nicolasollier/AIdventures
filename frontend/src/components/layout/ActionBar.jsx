import { Box, Spinner, Button, InputGroup, Input } from "@chakra-ui/react";
import { updateConversation } from "../../utils/localApi";
import { useState } from "react";

const ActionBar = ({
  isLoading,
  setIsLoading,
  setConversation,
}) => {
  const [userInput, setUserInput] = useState("");

  function throwDice() {
    const dice = Math.floor(Math.random() * 20) + 1;
    setIsLoading(true);

    updateConversation(`J'ai jeté un dé et j'ai obtenu ${dice}`).then(
      (data) => {
        setConversation(data);
        setIsLoading(false);
      });
  }

  function handleOptionClick(userResponse) {
    setUserInput("");
    setIsLoading(true);

    updateConversation(userResponse).then((data) => {
      setConversation(data);
      setIsLoading(false);
    });
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      maxWidth={"1280px"}
      bottom={0}
      position={"fixed"}
      bg={"gray.900"}
      boxShadow="2xl"
      px={[6, 12]}
      py={6}
    >
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.700"
          color="white"
          size="md"
          mb={4}
        />
      ) : (
        <>
          <InputGroup>
            <Input
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                  handleOptionClick(userInput);
                }
              }}
              placeholder={"Décrivez vos actions ici..."}
              fontSize={["xs", "sm"]}
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              textColor={"white"}
              borderColor={"gray.700"}
              _placeholder={{ opacity: 0.5, color: "white" }}
              py={6}
            />
            <Button
              onClick={() => throwDice()}
              fontSize={["xs", "sm"]}
              color={"white"}
              bg={"gray.700"}
              variant="solid"
              py={6}
              px={8}
              ml={4}
              _hover={{
                bg: "gray.600",
              }}
            >
              {"Jetter un dé"}
            </Button>

            <Button
              onClick={() => handleOptionClick(userInput)}
              fontSize={["xs", "sm"]}
              color={"white"}
              bg={"gray.700"}
              variant="solid"
              py={6}
              px={8}
              ml={4}
              _hover={{
                bg: "gray.600",
              }}
            >
              {"Envoyer"}
            </Button>
          </InputGroup>
        </>
      )}
    </Box>
  );
};

export default ActionBar;
