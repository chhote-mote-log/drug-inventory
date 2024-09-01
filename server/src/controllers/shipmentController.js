// /controllers/shipmentController.js
import { Shipment } from "../models/shipment.model.js";

// Create a new shipment
export const createShipment = async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    await shipment.save();
    res.status(201).json(shipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all shipments
export const getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single shipment by ID
export const getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) return res.status(404).json({ message: "Shipment not found" });
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a shipment
export const updateShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shipment) return res.status(404).json({ message: "Shipment not found" });
    res.status(200).json(shipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a shipment
export const deleteShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndDelete(req.params.id);
    if (!shipment) return res.status(404).json({ message: "Shipment not found" });
    res.status(200).json({ message: "Shipment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};