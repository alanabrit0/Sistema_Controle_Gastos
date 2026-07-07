# Sistema de Controle de Gastos Residenciais

## 🎯 Objetivo
Implementar um sistema para controle de gastos residenciais, permitindo:
- Cadastro de pessoas
- Cadastro de transações
- Consulta de totais (receitas, despesas e saldo)
- Persistência dos dados após fechamento da aplicação
- Código documentado e comentado para facilitar entendimento da lógica

---

## 🛠️ Tecnologias Utilizadas
- **Back-end:** .NET 6 com C#
- **Front-end:** React com Typescript
- **Banco de Dados:** SQLite (persistência local simples)
- **Ferramentas adicionais:** Entity Framework Core, Axios

---

## 📌 Funcionalidades

### Cadastro de Pessoas
- Criar, listar e deletar pessoas
- Ao deletar uma pessoa, todas as transações vinculadas a ela são removidas
- Campos:
  - Identificador único (gerado automaticamente)
  - Nome
  - Idade

### Cadastro de Transações
- Criar e listar transações
- Campos:
  - Identificador único (gerado automaticamente)
  - Descrição
  - Valor
  - Tipo (Despesa/Receita)
  - Pessoa (identificador da pessoa)
- Regras de negócio:
  - Se a pessoa for **menor de 18 anos**, só pode cadastrar **despesas**

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js >= 18
- .NET 6 SDK
- SQLite instalado ou disponível via pacote NuGet

### Passos
1. Clone o repositório:
   ```bash
   https://github.com/alanabrit0/Sistema_Controle_Gastos.git
>>>>>>> 72acbdddbbf23d0252066dcb2ddf4702f70a9c64
