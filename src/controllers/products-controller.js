import { Product as ProductModel} from '../models/Product.js'
import { checkingForErrors } from '../helpers/checkingForErrors.js'
import { validateApiKey } from '../helpers/keyValidator.js'

// GET
export const getAllProducts =  async (req, res) =>{
  
  if(validateApiKey(req)){
    try {
      const products = await ProductModel.find();
      res.status(200).send(products)
      return
      
    } catch (error) {
      res.status(500).send({ error: error })
      return
    }
  }else{
    return res.status(401).send({message: "You are not allowed"});
  }
}

// POST
export const createProduct = async (req, res) => {
  const product = req.body;
  const productReady = {
    ...product
  }

  if(checkingForErrors(product)){ 
    return res.status(422).send(checkingForErrors(product))
  }

  if(validateApiKey(req)){
    try {
      await ProductModel.create(productReady);
  
      res.status(201).send({ message: `Product - ${product.productName} - added to the Database!`})
      return
      
    } catch (error) {
      res.status(500).send({ error: error})
      return
    }
  }else{
    return res.status(401).send({message: "You are not allowed"});
  }
}

// GET/:id
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if(validateApiKey(req)){
    try {
      const foundProduct = await ProductModel.findOne({_id: id})
      return res.status(200).send(foundProduct)
  
    } catch (error) {
      res.status(422).send({message: `Product with ID:${id} not found!`})
      return
    }
  }else{
    return res.status(401).send({message: "You are not allowed"});
  }
  
}

// DELETE/:id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if(validateApiKey(req)){
    try {
      await ProductModel.findOne({_id: id})
      await ProductModel.deleteOne({_id: id})
      return res.status(200).send({message: `Product with ID: ${id} deleted from Database!`})
  
    } catch (error) {
      res.status(500).send({error : error})
      return
    }
  }else{
    return res.status(401).send({message: "You are not allowed"});
  }
  

}

// PATCH/:id
export const editProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  
  const productReady = {
    ...product
  }

  if(validateApiKey(req)){
    try {
      await ProductModel.updateOne({_id: id}, productReady);
      res.status(200).send(productReady)
      return
      
    } catch (error) {
      res.status(422).send({message: `Product with ID:${id} not found!`})
      return
    }
  }else{
    return res.status(401).send({message: "You are not allowed"});
  }
  
}