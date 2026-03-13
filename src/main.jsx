import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Perfil from "./pages/perfil/perfil.jsx";
import Calendario from "./pages/calendario/calendario.jsx";
import Relatorios from "./pages/relatorio/relatorio.jsx";

const perfilRoot = document.getElementById("perfil");
if (perfilRoot) {
  createRoot(perfilRoot).render(<Perfil />);
}

const calendarioRoot = document.getElementById("calendario");
if (calendarioRoot) {
  createRoot(calendarioRoot).render(<Calendario />);
}

const relatorioRoot = document.getElementById("relatorio");
if (calendarioRoot){
  createRoot(relatorioRoot).render(<Relatorios />);
}