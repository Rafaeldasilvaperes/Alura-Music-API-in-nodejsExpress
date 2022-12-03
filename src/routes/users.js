import express from 'express';

import { userRegister } from '../controllers/usersControllers.js';

export const router = express.Router();

// ENDPOINT: v1/auth/user - For User registration and Login
router.post('/', userRegister);
