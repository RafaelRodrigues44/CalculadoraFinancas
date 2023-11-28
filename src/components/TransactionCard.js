// TransactionCard.js
import React from 'react';
import '../styles/TransactionCard.css'; // Certifique-se de importar o arquivo de estilos correto

// O componente TransactionCard recebe uma transação (transaction) e a função de exclusão de transação (onDeleteTransaction) como propriedades.
const TransactionCard = ({ transaction, onDeleteTransaction }) => {

  // Função para lidar com o clique no botão de exclusão.
  const handleDelete = () => {
    // Chama a função onDeleteTransaction passando o ID da transação a ser excluída.
    onDeleteTransaction(transaction.id);
  };

  // O componente renderiza os detalhes da transação em um cartão.
  return (
    <div className="transaction-card"> {/* Adiciona a classe "transaction-card" ao contêiner */}
      {/* Detalhes da transação */}
      <p>Nome: {transaction.name}</p>
      <p>Valor: R$ {transaction.value}</p>
      <p>Pago por: {transaction.paidBy}</p>

      {/* Botão de exclusão que chama a função handleDelete ao ser clicado */}
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};

export default TransactionCard;
