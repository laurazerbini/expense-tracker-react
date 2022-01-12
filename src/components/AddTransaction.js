import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
//"useState" is a Hook

export const AddTransaction = () => {
  //we need to create a piece of state and a function to
  //manipulate this piece of this state
  //whatever we want for default goes inside this function
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount // this makes the amount turns into an integer
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">ITEM</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Transaction Description" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            AMOUNT <br />
            <span className="form-details">income: positive (+)</span>  <br />
            <span className="form-details">expense: negative (-)</span>
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"/>
        </div>
        <button className="btn">ADD</button>
      </form>
    </div>
  )
}
