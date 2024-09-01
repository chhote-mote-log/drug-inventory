// routes/drugs.mjs

import express from 'express';
import { createDrug, getAllDrugs, getDrugById, updateDrug, deleteDrug } from '../controllers/drugController.js';

const router = express.Router();

// Create a new drug
router.post('/', createDrug);

// Get all drugs
router.get('/', getAllDrugs);

// Get drug by ID
router.get('/:id', getDrugById);

// Update a drug by ID
router.put('/:id', updateDrug);

// Delete a drug by ID
router.delete('/:id', deleteDrug);

export default router;