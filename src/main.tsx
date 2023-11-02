//Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

//Contexts
import { ConversationProvider } from "./contexts/ConversationContext";
import { SidePanelProvider } from "./contexts/SidePanelContext";

//Styles
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <ConversationProvider>
      <SidePanelProvider>
        <App />
      </SidePanelProvider>
    </ConversationProvider>
  </ChakraProvider>
);
