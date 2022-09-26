import express from 'express';

// routes imports
import { createProduct, getAllProducts, getSingleProduct, deleteProduct, editProduct } from '../controllers/products-controller.js';

export const router = express.Router();

// all routes in here are starting with /products

// GET
router.get('/', getAllProducts);
// POST
router.post('/', createProduct);
// GET SINGLE USER
router.get('/:id', getSingleProduct);
// DELETE SINGLE USER
router.delete('/:id', deleteProduct);
// PATCH
router.patch('/:id', editProduct)