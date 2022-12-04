import express from 'express';
// User controllers
import { userRegister, userLogin, getUser } from '../controllers/usersControllers.js';
// Validates token received by the client
import { tokenValidator } from '../middlewares/tokenValidator.js';

export const router = express.Router();

// ENDPOINT: v1/auth/user - For User registration and Login
router.post('/register', userRegister);
// ENDPOINT: v1/auth/login - Login with validation and JWT generation
router.post('/login', userLogin);
// ENDPOINT: v1/auth/user/<UserId>
router.get('/user/:id', tokenValidator, getUser);



