import { useState } from "react";
import "./calendario.css";
import HomeIcon from "@mui/icons-material/Home";

import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import IconButton from "@mui/material/IconButton";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "dayjs/locale/pt-br";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Calendario() {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const acessarPerfil = () => window.location.href = "./perfil.html";
  const acessarRelatorio = () => window.location.href = "./relatorio.html";
  function adicionarEvento(horario) {
    alert("Adicionar evento às " + horario);
  }

  return (
    <div className="pagina-inteira">
      <div className="pagina-celular">
        <div className="topo">
          <ArrowBackIcon
            className="icone-topo"
            onClick={() => window.history.back()}
          />

          <h1>Calendário</h1>

          <NotificationsNoneIcon className="icone-topo" />
        </div>

        <div className="calendario-card">
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="pt-br"
          >
            <DateCalendar
              value={dataSelecionada}
              onChange={(newValue) => setDataSelecionada(newValue)}
              dayOfWeekFormatter={(day) =>
                ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][day.day()]
              }
            />
          </LocalizationProvider>
        </div>

        <div className="resumo">
          <div className="resumo-titulo">
            <h2>Resumo Diário</h2>
          </div>

          <div className="evento vermelho">
            <div className="hora">
              <span>9:00</span>
              <small>AM</small>
            </div>

            <IconButton
              className="botao-add"
              onClick={() => adicionarEvento("9:00")}
            >
              <AddIcon />
            </IconButton>
          </div>

          <div className="evento amarelo">
            <div className="hora">
              <span>14:00</span>
              <small>PM</small>
            </div>

            <IconButton
              className="botao-add"
              onClick={() => adicionarEvento("14:00")}
            >
              <AddIcon />
            </IconButton>
          </div>

          <div className="evento azul">
            <div className="hora">
              <span>18:00</span>
              <small>PM</small>
            </div>

            <IconButton
              className="botao-add"
              onClick={() => adicionarEvento("18:00")}
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>

        <div className="menu-flutuante">
          <a href="#" className="menu-item ativo">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Início
          </a>

          <a href="#" className="menu-item" onClick={acessarRelatorio}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            Relatórios
          </a>

          <a href="#" className="menu-item" onClick={acessarPerfil}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            Perfil
          </a>
        </div>
      </div>
    </div>
  );
}
