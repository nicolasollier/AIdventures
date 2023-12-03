// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

// Contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ConversationProvider } from "./contexts/ConversationContext.jsx";
import { PlayerContextProvider } from "./contexts/PlayerContext.jsx";

// Styles
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

// Sentry Initialization
// Sentry.init({
//   dsn: import.meta.env.VITE_SENTRY_DSN,
//   integrations: [
//     new Integrations.BrowserTracing({
//       tracePropagationTargets: ["localhost", /^https:\/\/taleforge.io/],
//     }),
//     new Sentry.Replay(),
//   ],
//   tracesSampleRate: 1.0,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

// Render Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AuthProvider>
      <ConversationProvider>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </ConversationProvider>
    </AuthProvider>
  </ChakraProvider>
);
