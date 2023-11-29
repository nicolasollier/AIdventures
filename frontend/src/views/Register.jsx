import React, { useState } from "react";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import { registerUser } from "../utils/authApi";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(userData);
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
          Inscription
        </Text>
        <Input
          placeholder="Nom d'utilisateur"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Mot de passe"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
        />
        <Button width="full" onClick={handleSubmit}>
          S'inscrire
        </Button>
      </VStack>
    </Box>
  );
};

export default RegisterForm;
