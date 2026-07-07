import { useState } from "react";
import { api } from "../services/api";

export function PessoaForm() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number>(0);

  const salvarPessoa = async () => {
    try {
      await api.post("/pessoa", { nome, idade });
      alert("Pessoa cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar pessoa");
    }
  };

  return (
    <div>
      <h2>Cadastrar Pessoa</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={e => setIdade(Number(e.target.value))}
      />
      <button onClick={salvarPessoa}>Salvar</button>
    </div>
  );
}
