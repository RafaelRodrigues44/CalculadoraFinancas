// IncomeList.js
import React from 'react';
import TransactionCard from './TransactionCard';
import '../styles/IncomeList.css';

// O componente IncomeList recebe as receitas (incomes) e a função de exclusão de transação (onDeleteTransaction) como propriedades.
const IncomeList = ({ incomes, onDeleteTransaction }) => {

  // Função auxiliar para calcular o total das receitas.
  const calculateTotal = () => {
    // A função reduce é usada para somar os valores das receitas.
    // O parâmetro 'total' é acumulado a cada iteração, começando de 0.
    return incomes.reduce((total, income) => total + income.value, 0);
  };

  // O componente renderiza uma lista de receitas.
  return (
    <div className="income-list-container">
      <>
        {/* Título e total das receitas */}
        <h2 className="income-list-title">Receitas</h2>
        <p className="income-list-total">Total: R$ {calculateTotal()}</p>
      </>
      {/* Lista de receitas, onde cada receita é representada por um componente TransactionCard */}
      <div>
        {incomes.map((income, index) => (
          <TransactionCard key={index} transaction={income} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
