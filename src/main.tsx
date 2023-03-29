import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
