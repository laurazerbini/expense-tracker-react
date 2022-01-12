import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { ExpenseBox } from './components/ExpenseBox';
import { TransactionsList } from './components/TransactionsList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <ExpenseBox />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    
  );
}

export default App;
