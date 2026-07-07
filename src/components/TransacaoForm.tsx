import { useState, useEffect } from "react";
import { api } from "../services/api";

export function TransacaoForm() {
  const [valor, setValor] = useState<number>(0);
  const [tipo, setTipo] = useState("receita");
  const [pessoaId, setPessoaId] = useState<number>(0);
  const [pessoas, setPessoas] = useState<any[]>([]);

  useEffect(() => {
    api.get("/pessoa").then(res => setPessoas(res.data));
  }, []);

  const salvarTransacao = async () => {
    try {
      await api.post("/transacao", {
        valor,
        data: new Date().toISOString(),
        pessoaId,
        tipo
      });
      alert("Transação cadastrada com sucesso!");
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert("Erro ao cadastrar transação");
    }
  };

  return (
    <div>
      <h2>Cadastrar Transação</h2>
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={e => setValor(Number(e.target.value))}
      />
      <select value={tipo} onChange={e => setTipo(e.target.value)}>
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>
      <select value={pessoaId} onChange={e => setPessoaId(Number(e.target.value))}>
        <option value={0}>Selecione a Pessoa</option>
        {pessoas.map(p => (
          <option key={p.id} value={p.id}>
            {p.nome}
          </option>
        ))}
      </select>
      <button onClick={salvarTransacao}>Salvar</button>
    </div>
  );
}
