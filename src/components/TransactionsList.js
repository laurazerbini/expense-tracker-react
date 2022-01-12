import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState'

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* // we are rendering a Transaction component, passing transaction as a prop */}
        {/* when you output a list, it needs to have a specific key */}
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

