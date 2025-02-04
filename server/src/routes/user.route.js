// routes/users.mjs

import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

export default router;