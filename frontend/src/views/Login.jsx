import React, { useState } from "react";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import { loginUser } from "../utils/authApi";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(loginData);
    } catch (error) {
      if (error.response.data.includes("email")) {
        setErrors({ ...errors, email: error.response.data });
      }
      if (error.response.data.includes("password")) {
        setErrors({ ...errors, password: error.response.data });
      }
    }
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
        <Text fontSize="xl">TaleForge</Text>
        <Text textAlign="center" fontSize="sm" fontWeight="regular" opacity="0.5" mb={4}>
          Veuillez entrez vos identifiants pour <br /> vous connecter à la plateforme.
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
            borderColor={errors.email ? "red.500" : "gray.200"}
          />
          {errors.email && (
            <Text color="red.500" mt={2}>
              {errors.email}
            </Text>
          )}
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
            borderColor={errors.password ? "red.500" : "gray.200"}
          />
          {errors.password && (
            <Text color="red.500" mt={2}>
              {errors.password}
            </Text>
          )}
        </Box>

        <Button mt={4} width="full" onClick={handleSubmit}>
          Se connecter
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
