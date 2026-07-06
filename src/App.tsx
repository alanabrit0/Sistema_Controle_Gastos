import React from "react";
import { PessoaForm } from "./components/PessoaForm";
import { TransacaoForm } from "./components/TransacaoForm";
import { ConsultaTotais } from "./components/ConsultaTotais";

function App() {
  return (
    <div>
      <h1>Controle de Gastos Residenciais</h1>
      <PessoaForm />
      <TransacaoForm />
      <ConsultaTotais />
    </div>
  );
}

export default App;
