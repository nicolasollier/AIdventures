import React, { useState } from "react";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import { loginUser } from "../utils/authApi";
import { useNavigate } from "react-router-dom";
import { getConversationId } from "../utils/localStorageUtils";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(loginData);
    const conversationId = await getConversationId();

    if (conversationId) {
      navigate("/conversation");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"full"}
      maxW={"md"}
      p={6}
      boxShadow={"lg"}
      borderRadius={5}
    >
      <VStack spacing={4} width="full">
        <Text fontSize="2xl" fontWeight="bold">
          Connexion
        </Text>
        <Input
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Mot de passe"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <Button width="full" onClick={handleSubmit}>
          Se connecter
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
