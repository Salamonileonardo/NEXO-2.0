import React, { useState } from "react";
import "./recuperacao.css";

export default function Recuperacao() {
  const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Por favor, insira seu email.");
            return;
        }
        alert(`Instruções de recuperação enviadas para ${email}`);
        // Aqui você pode integrar com API
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Recuperação de Conta</h2>
                <p>Digite seu email para receber as instruções de recuperação</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}


