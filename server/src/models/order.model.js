import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Order Schema
const OrderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  orderedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  drugs: [{
    drug: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Drug',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  orderStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  orderDate: {
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

export const Order = mongoose.model('Order', OrderSchema);