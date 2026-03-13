import "./relatorio.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Relatorios() {
  function abrirRelatorio(mes) {
    console.log("Abrir relatório de", mes);
  }

  return (
    <div className="pagina-inteira">
      <div className="pagina-celular">
        <div className="topo">
          <ArrowBackIcon
            className="icone-topo"
            onClick={() => window.history.back()}
          />

          <h1>Relatórios</h1>

          <img src="/logo-nexo.png" className="logo-nexo" alt="Nexo" />
        </div>

        <div className="lista-relatorios">
          <div className="relatorio-card">
            <div className="relatorio-info">
              <DescriptionIcon className="icone-relatorio" />

              <div>
                <h3>DESEMPENHO - Setembro</h3>

                <p className="data">01/09/2025</p>

                <p className="periodo">Período: 01/09/2025 - 01/10/2025</p>

                <p className="status concluido">Status: Concluído</p>
              </div>
            </div>

            <button
              className="botao-abrir"
              onClick={() => abrirRelatorio("setembro")}
            >
              <AddIcon />
            </button>
          </div>

          <div className="relatorio-card">
            <div className="relatorio-info">
              <DescriptionIcon className="icone-relatorio" />

              <div>
                <h3>DESEMPENHO - Outubro</h3>

                <p className="data">01/10/2025</p>

                <p className="periodo">Período: 01/10/2025 - 01/11/2025</p>

                <p className="status andamento">Status: Em andamento</p>
              </div>
            </div>

            <button
              className="botao-abrir"
              onClick={() => abrirRelatorio("outubro")}
            >
              <AddIcon />
            </button>
          </div>

          <div className="relatorio-card">
            <div className="relatorio-info">
              <DescriptionIcon className="icone-relatorio" />

              <div>
                <h3>DESEMPENHO - Novembro</h3>

                <p className="data">01/11/2025</p>

                <p className="periodo">Período: 01/11/2025 - 01/12/2025</p>

                <p className="status nao-iniciado">Status: Não iniciado</p>
              </div>
            </div>

            <button
              className="botao-abrir"
              onClick={() => abrirRelatorio("novembro")}
            >
              <AddIcon />
            </button>
          </div>

          <div className="relatorio-card">
            <div className="relatorio-info">
              <DescriptionIcon className="icone-relatorio" />

              <div>
                <h3>DESEMPENHO - Dezembro</h3>

                <p className="data">01/12/2025</p>

                <p className="periodo">Período: 01/12/2025 - 01/01/2026</p>

                <p className="status nao-iniciado">Status: Não iniciado</p>
              </div>
            </div>

            <button
              className="botao-abrir"
              onClick={() => abrirRelatorio("dezembro")}
            >
              <AddIcon />
            </button>
          </div>
        </div>

        <div className="menu-flutuante">
          <a href="#" className="menu-item">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Início
          </a>

          <a href="#" className="menu-item">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            Calendário
          </a>

          <a href="#" className="menu-item">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 2h9a2 2 0 012 2v16l-4-2-4 2-3-2-3 2V4a2 2 0 012-2z" />
            </svg>
            Relatórios
          </a>
        </div>
      </div>
    </div>
  );
}
