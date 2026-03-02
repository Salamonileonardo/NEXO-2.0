import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Avatar from "@mui/material/Avatar";

export default function Perfil() {
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
              {" "}
              &larr;
            </button>
          </div>
          <br></br>
          <div className="avatar-usuario">
            <Avatar
              alt="Avatar do usuário"
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <br></br>
          <div className="nome-usuario">
            <h1>João Pedro Alves</h1>
          </div>
          <div className="cpf-usuario">
            <p style={{ textAlign: "center" }}>
              CPF: 123.456.789-00 <br></br>
            </p>
          </div>

          <div className="nivel-TEA">
            <p>Nível 1 </p>
          </div>

          <br></br>

          <div className="terapias-usuario">
            <h3 style={{ textAlign: "center" }}>Terapias Mensais</h3>
            <p style={{ textAlign: "center" }}>8/8</p>
          </div>

          <div className="rotinas-usuario">
            <h3 style={{ textAlign: "center" }}>Rotinas Mensais</h3>
            <p style={{ textAlign: "center" }}>30/30</p>
          </div>

          <div className="conquistas-usuario">
            <h3 style={{ textAlign: "center" }}>Conquistas Mensais</h3>
            <p style={{ textAlign: "center" }}>30/30</p>
          </div>

          <br></br>

          <div className="sensibilidades-usuario">
            <h2 style={{ textAlign: "left" }}>Sensibilidades: </h2>
          </div>
          <div className="sensibilidade">
            <p style={{ textAlign: "left" }}>
              - Sons altos; <br></br> - Luzes fortes; <br></br> - Multidões;{" "}
              <br></br> - Etiquetas de roupas; <br></br> - Cheiros fortes.
            </p>
          </div>

          <br></br>

          <div className="mae">
            <p style={{ textAlign: "left" }}>Mãe</p>
          </div>

          <div className="mae-usuario">
            <p style={{ textAlign: "left" }}>
              Maria Alves - (11) 98736-0627 <br></br>
            </p>
          </div>

          <br></br>

          <div className="pai">
            <p style={{ textAlign: "left" }}>Pai</p>
          </div>

          <div className="pai-usuario">
            <p style={{ textAlign: "left" }}>
              Carlos Alves - (11) 98608-2877 <br></br>
            </p>
          </div>

          <br></br>

          <nav class="menu-flutuante">
            <a href="#" class="menu-item ativo">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Início
            </a>

            <a href="#" class="menu-item">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
              Relatorios
            </a>

            <a href="#" class="menu-item">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              Perfil
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
