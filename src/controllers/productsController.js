// Products Service
import {ProductService} from '../service/productService.js'

const SERVICE = ProductService.productService


// GET
export const getAllProducts = async (req, res) => {
  const {status, products, error} = await SERVICE.getAllProducts()
  
  return res.status(status).send(products ? products : error);
}

// POST
export const createProduct = async (req, res) => {
  const productToBePosted = req.body;
  const {status, product, error } = await SERVICE.postOneProduct(productToBePosted);

  return res.status(status).send(product ? product : error);
}

// GET/:id
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const {status, product, error} = await SERVICE.getOneProduct(id);

  return res.status(status).send(product ? product : error);
}

// DELETE/:id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const {status, product, error} = await SERVICE.deleteOneProduct(id);

  return res.status(status).send(product ? product : error);
}

// PATCH/:id
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const productBody = req.body;
  
  const {status, product, error} = await SERVICE.editOneProduct(id, productBody)
  
  return res.status(status).send(product ? product : error);
}