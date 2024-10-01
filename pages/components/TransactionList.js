
export default function TransactionList({ transactions }) {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <div>No transactions available.</div>;
  }

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction._id}>
          {transaction.date ? new Date(transaction.date).toLocaleDateString() : 'Unknown date'}: 
          {transaction.type} = 
          {transaction.amount !== undefined ? transaction.amount : '0'} THB  Noet = 
          {transaction.note || 'No note provided'}
        </li>
      ))}
    </ul>
  );
}
