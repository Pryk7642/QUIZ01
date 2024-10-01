import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Graph({ transactions }) {
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: 'Income',
        data: transactions.filter(t => t.type === 'income').map(t => t.amount),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Expense',
        data: transactions.filter(t => t.type === 'expense').map(t => t.amount),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
}
