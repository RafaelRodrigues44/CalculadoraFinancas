// App.js
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import './App.css'; // Importing the style file

const App = () => {
  // State to manage expenses and incomes
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  // Function to handle adding a new transaction
  const handleAddTransaction = (transactionData) => {
    // Creating a new transaction with a unique ID using Date.now()
    const newTransaction = { ...transactionData, id: Date.now() };

    // Checking the type of transaction and updating the corresponding state
    if (transactionData.type === 'expense') {
      setExpenses((prevExpenses) => [...prevExpenses, newTransaction]);
    } else if (transactionData.type === 'income') {
      setIncomes((prevIncomes) => [...prevIncomes, newTransaction]);
    }
  };

  // Function to handle deleting a transaction
  const handleDeleteTransaction = (id) => {
    // Filtering out the transaction with the specified ID from expenses and incomes
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
  };

  // Rendering the main application component
  return (
    <div className="app-container">
      {/* Title section */}
      <div className='title'>
        <h2>Gerenciador de Finanças</h2>
        <p>Aluno: Rafael Rodrigues</p>
        <p>2º Sem. ADS</p>
      </div>

      {/* TransactionForm component for adding new transactions */}
      <div className="box-left">
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>

      {/* IncomeList component for displaying income transactions */}
      <div className="box-center">
        <IncomeList incomes={incomes} onDeleteTransaction={handleDeleteTransaction} />
      </div>

      {/* ExpenseList component for displaying expense transactions */}
      <div className="box-right">
        <ExpenseList expenses={expenses} onDeleteTransaction={handleDeleteTransaction} />
      </div>
    </div>
  );
};

// Exporting the App component as the default export
export default App;
