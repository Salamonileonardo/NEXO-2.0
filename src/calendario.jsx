import { useState } from "react";
import "./calendario.css";
import { createroot } from "react-dom/client";
import "index.css";
import Perfil from "./App.jsx";
import Reactlogo from "./assets/react.svg";
import ViteLogo from "/vite.svg";

export default function Calendario() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pagina-inteira">
        <div className="pagina-celular">
          <div className="botao-voltar">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#a285ff",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => window.history.back()}
            >
              &larr;
            </button>
          </div>
          <h1 style={{ textAlign: "center" }}>Calendário</h1>
        </div>
      </div>
    </>
  );
}
