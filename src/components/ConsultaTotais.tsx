import { useEffect, useState } from "react";
import { api } from "../services/api";

export function ConsultaTotais() {
  const [dados, setDados] = useState<any>(null);

  useEffect(() => {
    api.get("/consulta").then(res => setDados(res.data));
  }, []);

  if (!dados) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Totais por Pessoa</h2>
      {dados.Pessoas.map((p: any) => (
        <div key={p.Nome}>
          <p>{p.Nome} - Receitas: {p.Receitas} | Despesas: {p.Despesas} | Saldo: {p.Saldo}</p>
        </div>
      ))}
      <h3>Total Geral</h3>
      <p>Receitas: {dados.TotalReceitas} | Despesas: {dados.TotalDespesas} | Saldo: {dados.SaldoGeral}</p>
    </div>
  );
}
