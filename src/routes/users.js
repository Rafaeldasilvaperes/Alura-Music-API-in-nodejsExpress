import express from 'express';
// User controllers
import { userRegister, userLogin, getUser } from '../controllers/usersControllers.js';
// Validates token received by the client
import { tokenValidator } from '../middlewares/tokenValidator.js';
// middleware for api_key validation
import { validateApiKey } from '../middlewares/keyValidator.js';

export const router = express.Router();

// ENDPOINT: v1/auth/user - For User registration and Login
router.post('/register', validateApiKey, userRegister);
// ENDPOINT: v1/auth/login - Login with validation and JWT generation
router.post('/login', validateApiKey, userLogin);
// ENDPOINT: v1/auth/user/<UserId>
router.get('/user/:id', tokenValidator, validateApiKey, getUser);



