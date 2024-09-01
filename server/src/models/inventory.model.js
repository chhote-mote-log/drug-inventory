import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Inventory Schema
const InventorySchema = new Schema({
  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drug',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  batchNumber: {
    type: String,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  stockInDate: {
    type: Date,
    default: Date.now
  },
  stockOutDate: {
    type: Date
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
export const Inventory = mongoose.model('Inventory', InventorySchema);