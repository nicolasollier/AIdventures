import { Box } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import Chatbox from "./components/Chatbox";
import Sidepanel from "./components/layout/Sidepanel";

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
        <Header />
        <Sidepanel />
        <Chatbox />
    </Box>
  );
}

export default App;
