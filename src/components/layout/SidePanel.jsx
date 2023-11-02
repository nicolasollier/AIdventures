import React, { useContext } from "react";
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
import { SidePanelContext } from "../../contexts/SidePanelContext";
import CloseIcon from "../icons/CloseIcon";

const SidePanel = () => {
  const { isOpen, setIsOpen } = useContext(SidePanelContext);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
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
          px={5}
          pt={5}
          pb={1}
          borderLeft="1px"
          borderColor="gray.700"
          bg="gray.900"
          position="fixed"
          right={0}
          top={0}
          zIndex={100}
          onClick={stopPropagation}
        >
          <Flex direction="column" h="full" justifyContent="space-between">
            <Button
              zIndex={100}
              position="absolute"
              onClick={togglePanel}
              transition={"all 0.2s"}
              borderRadius={"full"}
              bgColor={"gray.900"}
              color={"white"}
              right={6}
              top={6}
              p={4}
              _hover={{
                cursor: "pointer",
                bgColor: "gray.700",
              }}
            >
              <CloseIcon />
            </Button>

            <VStack spacing={5}>
              <Box p={5} width="full">
                <Text fontSize={"xl"} fontWeight={"normal"} color="white">
                  Journal de l'aventurier
                </Text>

                <Box mt={10}>
                  <Text mb={2} color="white">
                    Barre de vie
                  </Text>
                  <Progress
                    value={90}
                    size="lg"
                    colorScheme="green"
                    borderRadius="sm"
                    bgColor={"gray.700"}
                  />
                </Box>

                <VStack spacing={4} align="stretch" mt={10} flexGrow={1}>
                  <InputGroup display={"flex"} flexDir={"column"} mb={4}>
                    <Text mb={3} color="white">
                      Votre quête active
                    </Text>
                    <Textarea
                      placeholder={"Décrivez vos actions ici..."}
                      fontSize={"sm"}
                      textColor={"white"}
                      borderColor={"gray.700"}
                      _placeholder={{ opacity: 0.5, color: "white" }}
                      resize="none"
                      flexGrow={1}
                      h={["100px", "200px"]}
                    />
                  </InputGroup>

                  <InputGroup display={"flex"} flexDir={"column"}>
                    <Text mb={3} color="white">
                      Votre équipement
                    </Text>
                    <Textarea
                      placeholder={"Listez votre équipement ici..."}
                      fontSize={"sm"}
                      textColor={"white"}
                      borderColor={"gray.700"}
                      _placeholder={{ opacity: 0.5, color: "white" }}
                      resize="none"
                      flexGrow={1}
                      h={["100px", "200px"]}
                    />
                  </InputGroup>
                </VStack>
              </Box>
            </VStack>

            <Box p={5} alignSelf="flex-start" width={"100%"}>
              <Button
                w={"100%"}
                fontSize={["xs", "sm"]}
                color={"white"}
                bg={"gray.700"}
                py={6}
                variant="solid"
                _hover={{
                  bg: "gray.600",
                }}
              >
                Sauvegarder
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default SidePanel;
