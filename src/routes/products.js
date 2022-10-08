import express from 'express';
// routes imports
import { createProduct, getAllProducts, getSingleProduct, deleteProduct, editProduct } from '../controllers/products-controller.js';
// parse image
import { upload } from '../middlewares/multer.js'

export const router = express.Router();

// GET
router.get('/', getAllProducts);
// POST
router.post('/', upload.single('images') ,createProduct);
// GET SINGLE PRODUCT
router.get('/:id', getSingleProduct);
// DELETE SINGLE PRODUCT
router.delete('/:id', deleteProduct);
// PATCH
router.patch('/:id', editProduct)
