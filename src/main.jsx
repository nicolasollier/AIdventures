//Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//Contexts
import { ConversationProvider } from "./contexts/ConversationContext.jsx";
import { PlayerContextProvider } from "./contexts/PlayerContext.jsx";

//Styles
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ConversationProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </ConversationProvider>
  </ChakraProvider>
);
