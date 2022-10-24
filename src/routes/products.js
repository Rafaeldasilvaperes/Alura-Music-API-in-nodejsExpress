import express from 'express';
// routes imports
import { createProduct, getAllProducts, getSingleProduct, deleteProduct, editProduct } from '../controllers/products-controller.js';
// parse image
import { upload } from '../middlewares/multer.js'
// middleware for api_key validation
import { validateApiKey } from '../middlewares/keyValidator.js'

export const router = express.Router();

// GET
router.get('/', validateApiKey, getAllProducts);
// POST
router.post('/', validateApiKey, upload.single('images') ,createProduct);
// GET SINGLE PRODUCT
router.get('/:id', validateApiKey, getSingleProduct);
// DELETE SINGLE PRODUCT
router.delete('/:id', validateApiKey, deleteProduct);
// PATCH
router.patch('/:id', validateApiKey, editProduct);
