import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Shipment Schema
const ShipmentSchema = new Schema({
  shipmentId: {
    type: String,
    required: true,
    unique: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  shippedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receivedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  shipmentStatus: {
    type: String,
    enum: ['In Transit', 'Delivered', 'Delayed', 'Lost'],
    default: 'In Transit'
  },
  shipmentDate: {
    type: Date,
    default: Date.now
  },
  deliveryDate: {
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

export const Shipment = mongoose.model('Shipment', ShipmentSchema);