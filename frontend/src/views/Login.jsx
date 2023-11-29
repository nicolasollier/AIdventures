import React, { useState } from "react";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import { loginUser } from "../utils/authApi";

const LoginForm = () => {
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
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"full"}
      maxW={"lg"}
      p={6}
      boxShadow={"lg"}
      borderRadius={5}
    >
      <VStack spacing={6} width="full">
        <Text fontSize="xl">AIdventures</Text>
        <Text fontSize="sm" fontWeight="regular" opacity="0.5" mb={4}>
          Veuillez entrez vos identifiants pour vous connecter à la plateforme.
        </Text>

        <Box width="full">
          <Text mb={2} fontSize="sm">
            Email
          </Text>
          <Input
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Box>

        <Box width="full">
          <Text mb={2} fontSize="sm">
            Password
          </Text>
          <Input
            placeholder="Mot de passe"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </Box>

        <Button mt={4} width="full" onClick={handleSubmit}>
          Se connecter
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
