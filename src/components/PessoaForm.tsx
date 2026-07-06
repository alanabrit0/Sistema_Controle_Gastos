import { useState } from "react";
import { api } from "../services/api";

export function PessoaForm() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  async function salvar() {
    await api.post("/pessoa", { nome, idade });
    alert("Pessoa cadastrada!");
  }

  return (
    <div>
      <input placeholder="Nome" onChange={e => setNome(e.target.value)} />
      <input type="number" placeholder="Idade" onChange={e => setIdade(Number(e.target.value))} />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
