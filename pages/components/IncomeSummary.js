export default function IncomeSummary({ transactions }) {
    const totalIncome = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  
    const formattedIncome = totalIncome.toLocaleString();
  
    return (
      <div>
        <h2>Total Income: {formattedIncome} THB</h2>
      </div>
    );
  }
  