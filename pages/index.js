import { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Graph from './components/Graph';
import Summary from './components/Summary';
import Link from 'next/link';

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await fetch('/api/transactions');
    const data = await response.json();


    if (Array.isArray(data)) {
      setTransactions(data);
    } else {
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (newTransaction) => {
    await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    });
    fetchTransactions();
  };

  return (
    <div>
      <h1>QUIZ</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <Summary transactions={transactions}/>
      <TransactionList transactions={transactions} />
      <Graph transactions={transactions}/>
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
