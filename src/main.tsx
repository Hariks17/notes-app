import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
