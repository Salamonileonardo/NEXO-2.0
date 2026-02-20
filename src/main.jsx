import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const perfilRoot = document.getElementById("perfil");
if (perfilRoot) {
  createRoot(perfilRoot).render(<App />);
}
