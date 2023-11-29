import { Box } from "@chakra-ui/react";
import Router from "./router/router";

function App() {
  return (
    <Box
      position={"relative"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="gray.900"
      color="white"
      minHeight="100vh"
      fontFamily="monospace"
    >
      <Router />
    </Box>
  );
}

export default App;
