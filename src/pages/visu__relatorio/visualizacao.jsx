import React from "react";
import "./visualizacao.css";
import { useState } from "react";

export default function Visualizacao() {
    return (

        <div className="pagina-inteira">
            <div className="pagina-celular">
                <div className="botao-voltar">
                    <button
                        style={{
                            background: "transparent",  
                            border: "none",
                            color: "#00E5FF",
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => window.history.back()}
                    >
                        &larr;
                    </button>   
                </div>
                <div className="titulo-relatorio">
                    <h1>Relatório de Terapias</h1>
                </div>
                <div className="descricao-relatorio">
                    <p style={{ textAlign: "center" }}>
                        Aqui você pode visualizar o relatório detalhado das terapias realizadas, incluindo progresso e recomendações.
                    </p>
                </div>  
                <div className="relatorio-detalhado">
                    <p style={{ textAlign: "center" }}>
                        - Terapia 1: Concluída com sucesso. Progresso: 80%. <br></br>
                        - Terapia 2: Em andamento. Progresso: 50%. <br></br>
                        - Terapia 3: Pendente. Progresso: 0%. <br></br>
                    </p>
                </div>
            </div>

        </div>
    );
}


