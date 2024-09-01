// models/Alert.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the Alert schema
const alertSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['LowInventory', 'ExpiredDrug', 'ShipmentDelay', 'Discrepancy', 'Other'], // Types of alerts
  },
  drug: {
    type: Schema.Types.ObjectId,
    ref: 'Drug', // Reference to the Drug model
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Critical'], // Severity levels
  },
  dateGenerated: {
    type: Date,
    default: Date.now,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
  resolvedDate: {
    type: Date,
    default: null,
  },
  acknowledgedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model who acknowledged the alert
  },
});

// Export the Alert model
export const Alert = mongoose.model('Alert', alertSchema);
