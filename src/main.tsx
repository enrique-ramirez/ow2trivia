import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ToastContextProvider } from "./contexts/ToastContext.tsx";
import { FactsContextProvider } from "./contexts/FactsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContextProvider>
      <FactsContextProvider>
        <App />
      </FactsContextProvider>
    </ToastContextProvider>
  </StrictMode>,
);
