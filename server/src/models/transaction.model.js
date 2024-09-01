import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Transaction Schema
const TransactionSchema = new Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true
  },
  action: {
    type: String,
    enum: ['Stock In', 'Stock Out', 'Transfer', 'Dispose', 'Order Placed', 'Order Fulfilled'],
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drug'
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  shipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment'
  },
  quantity: {
    type: Number
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Transaction = mongoose.model('Transaction', TransactionSchema);