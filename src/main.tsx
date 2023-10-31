//Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

//Contexts
import { ConversationProvider } from "./contexts/ConversationContext";

//Styles
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <ConversationProvider>
      <App />
    </ConversationProvider>
  </ChakraProvider>
);
