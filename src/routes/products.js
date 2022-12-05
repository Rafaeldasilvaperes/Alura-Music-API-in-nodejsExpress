import express from 'express';
// routes imports
import { createProduct, getAllProducts, getSingleProduct, deleteProduct, editProduct } from '../controllers/productsController.js';
// middleware for api_key validation
import { validateApiKey } from '../middlewares/keyValidator.js';
// Validates token received by the client
import { tokenValidator } from '../middlewares/tokenValidator.js';

export const router = express.Router();

// ENDPOINT: v1/products - For products
// GET
router.get('/', validateApiKey, getAllProducts);
// POST
router.post('/', tokenValidator, validateApiKey, createProduct);
// GET SINGLE PRODUCT
router.get('/:id', validateApiKey, getSingleProduct);
// DELETE SINGLE PRODUCT
router.delete('/:id', tokenValidator, validateApiKey, deleteProduct);
// PATCH
router.patch('/:id', tokenValidator, validateApiKey, editProduct);



