import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import {
  Box,
  VStack,
  InputGroup,
  Textarea,
  Text,
  Progress,
  Button,
  Flex,
} from "@chakra-ui/react";
import CloseIcon from "../icons/CloseIcon";

const SidePanel = () => {
  const { isOpen, setIsOpen, playerInfos, setPlayerInfos } =
    useContext(PlayerContext);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerInfos({
      ...playerInfos,
      [name]: value,
    });
  };

  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="blackAlpha.400"
          zIndex="99"
          onClick={closePanel}
        />
      )}

      {isOpen && (
        <Box
          w={["100%", "60%", "40%"]}
          h="100vh"
          px={[2, 5]}
          pt={5}
          pb={1}
          borderLeft="1px"
          borderColor="gray.700"
          bg="gray.900"
          position="fixed"
          right="0"
          top="0"
          zIndex="100"
          onClick={stopPropagation}
        >
          <Flex direction="column" h="full" justifyContent="space-between">
            <Button
              zIndex={100}
              position="absolute"
              onClick={togglePanel}
              transition="all 0.2s"
              borderRadius="full"
              bgColor="gray.900"
              color="white"
              right="6"
              top="6"
              p="4"
              _hover={{
                cursor: "pointer",
                bgColor: "gray.700",
              }}
            >
              <CloseIcon />
            </Button>

            <VStack spacing={5} overflowY="auto" h="full">
              <Flex p={5} width="full" h="full" justifyContent="space-evenly" flexDir={"column"} >
                <Text fontSize={["lg", "xl"]} fontWeight="normal" color="white">
                  Journal de l'aventurier
                </Text>

                <Box mt={10}>
                  <Text mb={2} color="white">
                    Barre de vie
                  </Text>
                  <Progress
                    value={playerInfos.hp || 0}
                    size="lg"
                    colorScheme="green"
                    borderRadius="sm"
                    bgColor="gray.700"
                  />
                </Box>

                <VStack spacing={4} align="stretch" mt={10}>
                  <InputGroup display="flex" flexDir="column" mb={4}>
                    <Text mb={3} color="white">
                      Votre quête active
                    </Text>
                    <Textarea
                      name="activeQuest"
                      h={["100px", "160px"]}
                      onChange={handleInputChange}
                      value={playerInfos.activeQuest || ""}
                      placeholder="Décrivez votre quête en cours..."
                      fontSize="sm"
                      lineHeight={1.8}
                      textColor="white"
                      borderColor="gray.700"
                      _placeholder={{ opacity: 0.5, color: "white" }}
                      resize="none"
                    />
                  </InputGroup>

                  <InputGroup display="flex" flexDir="column">
                    <Text mb={3} color="white">
                      Votre équipement
                    </Text>
                    <Textarea
                      name="equipment"
                      h={["100px", "160px"]}
                      onChange={handleInputChange}
                      value={playerInfos.equipment || ""}
                      placeholder="Listez votre équipement ici..."
                      fontSize="sm"
                      lineHeight={1.8}
                      textColor="white"
                      borderColor="gray.700"
                      _placeholder={{ opacity: 0.5, color: "white" }}
                      resize="none"
                    />
                  </InputGroup>
                </VStack>

                <Box alignSelf={"flex-end"} mt="auto" width="100%">
                  <Button
                    onClick={closePanel}
                    w="100%"
                    fontSize={["xs", "sm"]}
                    color="white"
                    bg="gray.700"
                    py={6}
                    mb={.5}
                    variant="solid"
                    _hover={{
                      bg: "gray.600",
                    }}
                  >
                    Sauvegarder
                  </Button>
                </Box>
              </Flex>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default SidePanel;
