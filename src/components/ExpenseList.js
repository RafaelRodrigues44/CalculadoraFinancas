// ExpenseList.js
import React from 'react';
import TransactionCard from './TransactionCard';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteTransaction }) => {
  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.value, 0);
  };

  // Se a lista de despesas estiver vazia, não renderizar o componente
  if (expenses.length === 0) {
    return null;
  }

  return (
    <div className="expense-list-container">
      <>
        <h2 className="expense-list-title">Despesas</h2>
        <p className="expense-list-total">Total: R$ {calculateTotal()}</p>
      </>
      <div>
        {expenses.map((expense, index) => (
          <TransactionCard key={index} transaction={expense} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
