import { useState } from "react";
import { api } from "../services/api";

export function TransacaoForm() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("despesa");
  const [pessoaId, setPessoaId] = useState(0);

  async function salvar() {
    await api.post("/transacao", { descricao, valor, tipo, pessoaId });
    alert("Transação cadastrada!");
  }

  return (
    <div>
      <input placeholder="Descrição" onChange={e => setDescricao(e.target.value)} />
      <input type="number" placeholder="Valor" onChange={e => setValor(Number(e.target.value))} />
      <select onChange={e => setTipo(e.target.value)}>
        <option value="despesa">Despesa</option>
        <option value="receita">Receita</option>
      </select>
      <input type="number" placeholder="ID da Pessoa" onChange={e => setPessoaId(Number(e.target.value))} />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
