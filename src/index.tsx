import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProjectContextProvider from "./context/ProjectContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);
