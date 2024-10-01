
import React, { useState } from 'react';

export default function TransactionForm({ onAddTransaction }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      date: new Date(date).toISOString(),
      type,
      note,
    };
    onAddTransaction(newTransaction);
    setAmount('');
    setDate('');
    setType('income');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note" />
      <button type="submit">Add</button>
    </form>
  );
}
