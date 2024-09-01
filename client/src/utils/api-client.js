// /src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5173/api'; // Replace with your backend URL

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Create a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Update a user
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
// src/api/apiClient.js


export const fetchDrugs = async () => {
  return await axios.get(`${API_URL}/drugs`);
};

export const fetchInventory = async () => {
  return await axios.get(`${API_URL}/inventory`);
};

export const fetchOrders = async () => {
  return await axios.get(`${API_URL}/orders`);
};

export const fetchShipments = async () => {
  return await axios.get(`${API_URL}/shipments`);
};

export const fetchTransactions = async () => {
  return await axios.get(`${API_URL}/transactions`);
};

export const fetchAlerts = async () => {
  return await axios.get(`${API_URL}/alerts`);
};

// Add more functions for other API requests as needed