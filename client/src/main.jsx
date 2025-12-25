import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CopilotKit } from "@copilotkit/react-core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CopilotKit runtimeUrl="http://localhost:8000/copilot">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CopilotKit>
  </React.StrictMode>
);
