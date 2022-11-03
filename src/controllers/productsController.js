// Helper for checking errors on POST request
import { checkingForErrors } from '../helpers/checkingForErrors.js'
// Data Access Object for DB queries, obs.: without an interface
import {QueryDB} from '../DAO/productDAO.js'

const DATABASE = QueryDB.Mongo

// GET
export const getAllProducts = async (req, res) =>{
  const Products = await DATABASE.getAllProducts();

  if(Products.status === true){
    return res.status(200).send(Products.products);
  }else{
    return res.status(404).send({ error: Products.error });
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

  const ProductToBePosted = await DATABASE.postOneProduct(productReady);

  if(ProductToBePosted.status === true){
    return res.status(200).send({ 
          message: { 
            product: `${ProductToBePosted.product.productName}`,
            status: "Added to the Database!"
          }
        });
  }else{
    return res.status(500).send({ 
      error: ProductToBePosted.error 
    });
  }
}

// GET/:id
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  const foundProduct = await DATABASE.getOneProduct(id);

  if(foundProduct.status === true){
    return res.status(200).send(foundProduct.product);
  }else{
    return res.status(404).send({ error: foundProduct.error });
  }
}

// DELETE/:id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const productToBeDeleted = await DATABASE.deleteOneProduct(id);
  if(productToBeDeleted.status === true){
    return res.status(200).send({ 
          message: { 
            product: `Product with name: ${productToBeDeleted.product.productName}`,
            status: "DELETED"
          }
        });
  }else{
    return res.status(404).send({error : productToBeDeleted.error});
  }
}

// PATCH/:id
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  
  const productEdited = {
    ...product
  }

  const productToBeEdited = await DATABASE.editOneProcut(id, productEdited)
  if(productToBeEdited.status === true){
    res.status(200).send({
      status: `Product id: ${id} edited successfully!`,
      message: productToBeEdited.product
    });
  }else{
    return res.status(404).send({error : productToBeEdited.error});
  }
}