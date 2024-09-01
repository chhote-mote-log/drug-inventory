// routes/alerts.mjs

import express from 'express';
import { createAlert, getAllAlerts, getAlertById, updateAlert,deleteAlert } from '../controllers/alertController.js';

const router = express.Router();

// Create a new alert
router.post('/', createAlert);

// Get all alerts
router.get('/', getAllAlerts);

// Get alert by ID
router.get('/:id', getAlertById);

// Update alert (e.g., to resolve it)
router.put('/:id', updateAlert);



// Delete an alert by ID
router.delete('/:id', deleteAlert);

export default router;