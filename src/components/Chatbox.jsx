import { Box, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import ActionBar from "./layout/ActionBar";
import { initConversation } from "../utils/api";
import { useEffect, useState, useRef } from "react";
import { useConversation } from "../hooks/useConversation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Chatbox = () => {
  const { conversation, setConversation } = useConversation();
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // setIsLoading(true);
    // initConversation(setConversation).then(() => setIsLoading(false));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <Box
      zIndex={5}
      display={"flex"}
      position={"relative"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      maxW={"1280px"}
      flex={1}
      overflowY={"auto"}
      mb={24}
      pt={[3, 6]}
      pb={[12, 24]}
      px={[6, 12]}
    >
      <VStack align="start" spacing={4} width="full">
        {conversation
          .filter((message) => message.role !== "system")
          .map((message, index) => (
            <HStack
              key={index}
              width="full"
              spacing={3}
              py={2}
              pl={message.role === "user" ? 0 : 5}
              pr={message.role !== "user" ? 0 : 5}
            >
              {message.role !== "user" && <Spacer />}
              <MotionBox
                maxW={"75%"}
                py={4}
                px={6}
                borderRadius={5}
                bgColor={message.role === "user" ? "gray.700" : "gray.800"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <Text fontSize={["xs", "sm"]} color="white">
                  {message.role === "user"
                    ? "Vous: " + message.content
                    : message.content}
                </Text>
              </MotionBox>
              {message.role === "user" && <Spacer />}
            </HStack>
          ))}
        <div ref={messagesEndRef} />
      </VStack>

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
