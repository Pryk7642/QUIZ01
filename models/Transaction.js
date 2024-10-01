import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },
  note: {
    type: String,
  },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
