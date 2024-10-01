export default function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <p>Total Income: {totalIncome} THB</p>
      <p>Total Expense: {totalExpense} THB</p>
      <p>Total Balance: {totalIncome - totalExpense} THB</p>
    </div>
  );
}
