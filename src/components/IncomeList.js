// IncomeList.js
import React from 'react';
import TransactionCard from './TransactionCard';
import '../styles/IncomeList.css';

const IncomeList = ({ incomes, onDeleteTransaction }) => {
  const calculateTotal = () => {
    return incomes.reduce((total, income) => total + income.value, 0);
  };

  // Se a lista de receitas estiver vazia, não renderizar o componente
  if (incomes.length === 0) {
    return null;
  }

  return (
    <div className="income-list-container">
      <>
        <h2 className="income-list-title">Receitas</h2>
        <p className="income-list-total">Total: R$ {calculateTotal()}</p>
      </>
      <div>
        {incomes.map((income, index) => (
          <TransactionCard key={index} transaction={income} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
