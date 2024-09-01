// routes/shipments.mjs

import express from 'express';
import { createShipment, getAllShipments, getShipmentById, updateShipment, deleteShipment } from '../controllers/shipmentController.js';

const router = express.Router();

// Create a new shipment
router.post('/', createShipment);

// Get all shipments
router.get('/', getAllShipments);

// Get a shipment by ID
router.get('/:id', getShipmentById);

// Update a shipment by ID
router.put('/:id', updateShipment);

// Delete a shipment by ID
router.delete('/:id', deleteShipment);

export default router;