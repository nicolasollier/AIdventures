import { Box } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import Router from "./router/router";
import SidePanel from "./components/layout/SidePanel";

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
      <SidePanel />
      <Router />
    </Box>
  );
}

export default App;
