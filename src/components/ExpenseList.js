// ExpenseList.js
import React from 'react';
import TransactionCard from './TransactionCard';
import '../styles/ExpenseList.css';

// O componente ExpenseList recebe as despesas (expenses) e a função de exclusão de transação (onDeleteTransaction) como propriedades.
const ExpenseList = ({ expenses, onDeleteTransaction }) => {

  // Função auxiliar para calcular o total das despesas.
  const calculateTotal = () => {
    // A função reduce é usada para somar os valores das despesas.
    // O parâmetro 'total' é acumulado a cada iteração, começando de 0.
    return expenses.reduce((total, expense) => total + expense.value, 0);
  };

  // O componente renderiza uma lista de despesas.
  return (
    <div className="expense-list-container">
      <>
        {/* Título e total das despesas */}
        <h2 className="expense-list-title">Despesas</h2>
        <p className="expense-list-total">Total: R$ {calculateTotal()}</p>
      </>
      {/* Lista de despesas, onde cada despesa é representada por um componente TransactionCard */}
      <div>
        {expenses.map((expense, index) => (
          <TransactionCard key={index} transaction={expense} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
