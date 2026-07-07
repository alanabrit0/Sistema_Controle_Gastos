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

      {dados?.pessoas?.map((p: any) => (
        <div key={p.nome}>
          <p>
            {p.nome} - Receitas: {p.receitas} | Despesas: {p.despesas} | Saldo: {p.saldo}
          </p>
        </div>
      ))}

      <h3>Total Geral</h3>
      <p>
        Receitas: {dados.totalReceitas} | Despesas: {dados.totalDespesas} | Saldo: {dados.saldoGeral}
      </p>
    </div>
  );
}
