// TransactionForm.js
import React, { useState, useEffect } from 'react';
import '../styles/TransactionForm.css';

const TransactionForm = ({ onAddTransaction }) => {
  const [name, setName] = useState(() => localStorage.getItem('name') || ''); 
  const [value, setValue] = useState(() => localStorage.getItem('value') || '');
  const [type, setType] = useState(() => localStorage.getItem('type') || 'income');
  const [paidBy, setPaidBy] = useState(() => localStorage.getItem('paidBy') || '');

  useEffect(() => {
    // Atualiza os valores no localStorage apenas se os estados não forem vazios
    if (name !== '') localStorage.setItem('name', name);
    if (value !== '') localStorage.setItem('value', value);
    if (type !== '') localStorage.setItem('type', type);
    if (paidBy !== '') localStorage.setItem('paidBy', paidBy);
  }, [name, value, type, paidBy]);

  const handleAddTransaction = () => {
    if (!name || !value || !paidBy) {
      alert('Por favor, preencha todos os campos antes de adicionar a transação.');
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      alert('Por favor, insira um valor numérico válido.');
      return;
    }

    const transactionData = {
      type,
      name,
      value: numericValue,
      paidBy,
    };

    onAddTransaction(transactionData);

    setName('');
    setValue('');
    setPaidBy('');
  };

  return (
    <div className="transaction-form">
      <h2>Adicionar Transação</h2>
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
      <button className="transaction-form-button" onClick={handleAddTransaction}>
        Adicionar
      </button>
    </div>
  );
};

export default TransactionForm;
