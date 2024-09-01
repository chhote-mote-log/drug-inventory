import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Drug Schema
const DrugSchema = new Schema({
  drugId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming manufacturers are also stored in the User collection
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
  composition: {
    type: String
  },
  storageConditions: {
    type: String
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
export const Drug = mongoose.model('Drug', DrugSchema);