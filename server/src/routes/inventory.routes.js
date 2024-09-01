// routes/inventories.mjs

import express from 'express';
import { addInventoryItem, getAllInventoryItems, getInventoryItemById, updateInventoryItem, deleteInventoryItem } from '../controllers/inventoryController.js';

const router = express.Router();

// Add an inventory item
router.post('/', addInventoryItem);

// Get all inventory items
router.get('/', getAllInventoryItems);

// Get an inventory item by ID
router.get('/:id', getInventoryItemById);

// Update an inventory item by ID
router.put('/:id', updateInventoryItem);

// Delete an inventory item by ID
router.delete('/:id', deleteInventoryItem);

export default router;