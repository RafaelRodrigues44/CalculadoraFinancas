// TransactionForm.js
import React, { useState } from 'react';
import '../styles/TransactionForm.css';

// O componente TransactionForm recebe a função onAddTransaction como propriedade.
const TransactionForm = ({ onAddTransaction }) => {

  // Estados para controlar os campos do formulário.
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('income');
  const [paidBy, setPaidBy] = useState('');

  // Função para adicionar uma nova transação.
  const handleAddTransaction = () => {
    // Verifica se todos os campos obrigatórios estão preenchidos.
    if (!name || !value || !paidBy) {
      alert('Por favor, preencha todos os campos antes de adicionar a transação.');
      return;
    }

    // Converte o valor para um número e verifica se é válido.
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      alert('Por favor, insira um valor numérico válido.');
      return;
    }

    // Cria um objeto com os dados da transação.
    const transactionData = {
      type,
      name,
      value: numericValue,
      paidBy,
    };

    // Chama a função onAddTransaction passando os dados da transação.
    onAddTransaction(transactionData);

    // Limpa os campos do formulário após adicionar a transação.
    setName('');
    setValue('');
    setPaidBy('');
  };

  // O componente renderiza um formulário para adicionar transações.
  return (
    <div className="transaction-form"> {/* Adicione a classe "transaction-form" ao contêiner */}
      {/* Título do formulário */}
      <h2>Adicionar Transação</h2>
      
      {/* Campos do formulário */}
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Valor:
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <br />
      <label>
        Tipo:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Receita</option>
          <option value="expense">Despesa</option>
        </select>
      </label>
      <br />
      <label>
        Meio de Pagamento:
        <input type="text" value={paidBy} onChange={(e) => setPaidBy(e.target.value)} />
      </label>
      <br />
      
      {/* Botão para adicionar a transação */}
      <button className="transaction-form-button" onClick={handleAddTransaction}>
        Adicionar
      </button>
    </div>
  );
};

export default TransactionForm;
