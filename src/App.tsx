import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex" 
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="gray.800" 
      color="white" 
      minHeight="100vh" 
      fontFamily="monospace"
      >
        <Text fontSize="5xl">AIdventures</Text>
    </Box>
  );
}

export default App;
