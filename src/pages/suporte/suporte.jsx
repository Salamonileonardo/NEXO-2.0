import React, { useState } from "react";
import "./suporte.css";

export default function Suporte() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3001/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (      
      <div className="suporte-container">
        <div className="suporte-box">
          <h2>Suporte NEXO</h2>
          <p>
            Estamos aqui pra te ajudar e propormos a solução. Responda esse
            formulário abaixo para que nossa equipe te responda o quanto antes.
          </p>

          <form onSubmit={handleSubmit}>
            <label>Seu nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Informe seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <label>Seu email</label>
            <input
              type="gmail"
              name="gmail"
              placeholder="voce@gmail.com"
              value={form.gmail}
              onChange={handleChange}
              required
            />

            <label>Como podemos te ajudar?</label>
            <textarea
              name="mensagem"
              placeholder="Descreva seu problema ou dúvida com o máximo de detalhes possível..."
              value={form.mensagem}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status === "success" && (
              <p className="sucesso">
                Recebemos sua mensagem! Vamos te responder em breve.
              </p>
            )}

            {status === "error" && (
              <p className="erro">Ocorreu um erro ao enviar. Tente novamente.</p>
            )}
          </form>
        </div>
      </div>
  );
}
