import express from 'express';

// routes imports
import { createUser, getAllUsers, getSingleUser, deleteUser, editUser } from '../controllers/users-controller.js';

export const router = express.Router();



// all routes in here are starting with /users

// GET
router.get('/', getAllUsers);
// POST
router.post('/', createUser);
// GET SINGLE USER
router.get('/:id', getSingleUser);
// DELETE SINGLE USER
router.delete('/:id', deleteUser);
// PATCH
router.patch('/:id', editUser)