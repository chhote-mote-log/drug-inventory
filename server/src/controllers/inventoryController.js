// /controllers/inventoryController.js
import { Inventory } from "../models/inventory.model.js";

// Add new inventory item
export const addInventoryItem = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all inventory items
export const getAllInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get inventory item by ID
export const getInventoryItemById = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findById(req.params.id);
    if (!inventoryItem) return res.status(404).json({ message: "Inventory item not found" });
    res.status(200).json(inventoryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update inventory item
export const updateInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inventoryItem) return res.status(404).json({ message: "Inventory item not found" });
    res.status(200).json(inventoryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete inventory item
export const deleteInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventoryItem) return res.status(404).json({ message: "Inventory item not found" });
    res.status(200).json({ message: "Inventory item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};