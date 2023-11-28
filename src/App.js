// App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import './App.css'; // Importando o arquivo de estilo

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleAddTransaction = (transactionData) => {
    if (transactionData.type === 'expense') {
      setExpenses((prevExpenses) => [...prevExpenses, { ...transactionData, id: Date.now() }]);
    } else if (transactionData.type === 'income') {
      setIncomes((prevIncomes) => [...prevIncomes, { ...transactionData, id: Date.now() }]);
    }
  };

  const handleDeleteTransaction = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
  };

  return (
    <div className="app-container">
      <div className='title'>
        <h2>Gerenciador de Finanças</h2>
        <p>Aluno: Rafael Rodrigues</p>
        <p>2º Sem. ADS</p>
      </div>

      <div className="box-left">
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>
      <div className="box-center">
        <IncomeList incomes={incomes} onDeleteTransaction={handleDeleteTransaction} />
      </div>
      <div className="box-right">
        <ExpenseList expenses={expenses} onDeleteTransaction={handleDeleteTransaction} />
      </div>
    </div>
  );
};

export default App;
