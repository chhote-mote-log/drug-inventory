// /controllers/drugController.js
import { Drug } from "../models/drug.model.js";
// Create a new drug
export const createDrug = async (req, res) => {
  try {
    const drug = new Drug(req.body);
    await drug.save();
    res.status(201).json(drug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all drugs
export const getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single drug by ID
export const getDrugById = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.status(200).json(drug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a drug
export const updateDrug = async (req, res) => {
  try {
    const drug = await Drug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.status(200).json(drug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a drug
export const deleteDrug = async (req, res) => {
  try {
    const drug = await Drug.findByIdAndDelete(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.status(200).json({ message: "Drug deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};