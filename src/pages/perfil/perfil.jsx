import { useState } from "react";
import "./perfil.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    alert("Senha redefinida com sucesso!");
    // Aqui você pode integrar com API
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Redefinir Senha</h2>
        <p>Digite sua nova senha abaixo</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nova senha</label>
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Redefinir senha</button>
        </form>
      </div>
    </div>
  );
}
