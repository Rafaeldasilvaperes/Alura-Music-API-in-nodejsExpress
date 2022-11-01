import ProductModel from '../models/Product.js'

import { checkingForErrors } from '../helpers/checkingForErrors.js'
// Data Access Object for DB queries
import {QueryDB} from '../DAO/productDAO.js'

const DATABASE = QueryDB.Mongo

// GET
export const getAllProducts = async (req, res) =>{
  
  try {
    
    const products = await DATABASE.getAllProducts()
    res.status(200).send(products);
    return;
  } catch (error) {
    res.status(500).send({ error: error });
    return;
  }
}

// POST
export const createProduct = async (req, res) => {
  const product = req.body;
  const productReady = {
    ...product
  }

  if(checkingForErrors(product)){ 
    return res.status(422).send(checkingForErrors(product));
  }

  try {
    await DATABASE.postOneProduct(productReady);
    res.status(201).send({ 
      message: { 
        product: `${productReady.productName}`,
        status: "Added to the Database!"
      }
    });
    return;
    
  } catch (error) {
    res.status(500).send({ error: error});
    return;
  }
}

// GET/:id
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const foundProduct = await DATABASE.getOneProduct(id)
    return res.status(200).send(foundProduct);

  } catch (error) {
    res.status(422).send({message: `Product with ID:${id} not found!`});
    return;
  }
}

// DELETE/:id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await DATABASE.deleteOneProduct(id);
    return res.status(200).send({ 
      message: { 
        product: `Product with id: ${id}`,
        status: "DELETED"
      }
    });

  } catch (error) {
    res.status(500).send({error : error});
    return;
  }
}


// PATCH/:id
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  
  const productReady = {
    ...product
  }

  try {
    await ProductModel.updateOne({_id: id}, productReady);
    res.status(200).send(productReady);
    return;
    
  } catch (error) {
    res.status(422).send({message: `Product with ID:${id} not found!`});
    return;
  }
}