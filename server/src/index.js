// /server.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors"
import connectDB from "./db/db.js"
import dotenv from "dotenv"
dotenv.config();

// Route files
import userRoutes from "./routes/user.route.js"
import drugRoutes from "./routes/drug.routes.js"
import inventoryRoutes from "./routes/inventory.routes.js"
import orderRoutes from "./routes/order.route.js"
import shipmentRoutes from "./routes/shipmenr.routes.js"
import transactionRoutes from "./routes/transaction.route.js"
import alertRoutes from "./routes/alert.routes.js"

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/drugs', drugRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/alerts', alertRoutes);

// Database connection


// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(()=>{
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

}).catch((error)=>{
  console.log(error);
})