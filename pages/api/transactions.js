import dbConnect from '../../utils/dbConnect';
import Transaction from '../../models/Transaction';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const transactions = await Transaction.find({});
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving transactions.' });
    }
  } else if (req.method === 'POST') {
    try {
      const transaction = new Transaction(req.body);
      await transaction.save();
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ message: 'Error creating transaction.' });
    }
  }
}
