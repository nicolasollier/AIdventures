// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ConversationProvider } from "./contexts/ConversationContext.jsx";
import { PlayerContextProvider } from "./contexts/PlayerContext.jsx";
import { SidePanelContextProvider } from "./contexts/SidePanelContext.jsx";

// Styles
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.scss";

// Render Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AuthProvider>
      <ConversationProvider>
        <PlayerContextProvider>
          <SidePanelContextProvider>
            <App />
          </SidePanelContextProvider>
        </PlayerContextProvider>
      </ConversationProvider>
    </AuthProvider>
  </ChakraProvider>
);
