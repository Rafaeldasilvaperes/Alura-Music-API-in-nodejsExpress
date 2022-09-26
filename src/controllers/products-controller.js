import { createNewProduct } from '../helpers/IDgenerator.js'

let products = [{
  "id": 1,
  "productName": "Product Name",
  "productPrice": "Product Price",
  "ProductDesc": "Product Description",
  "productAlt": "Image discription",
  "productType": "choose between ilustracoes,albums and camisetas",
  "productImage": "Image converted in base64"
}];

// get
export const getAllProducts = (req, res) =>{
  res.send(products);
}

// post
export const createProduct = (req, res) => {
  const product = req.body;
  createNewProduct(product, products);
  res.send(`Product "${product.productName}" added to the database!`);
}

// get/:id
export const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id == id);
  console.log(foundProduct);
  res.send(foundProduct);
}

// delete/:id
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id != id);
  res.send(`Product with the id "${id}" deleted from database!`);
}

// patch/:id
export const editProduct = (req, res) => {
  const { id } = req.params;
  const { productName, productPrice, ProductDesc, productAlt, productType, productImage } = req.body;
  const productForEdit = products.find((user) => user.id == id);

  if(productName) productForEdit.productName = productName;
  if(productPrice) productForEdit.productPrice = productPrice;
  if(ProductDesc) productForEdit.ProductDesc = ProductDesc;

  if(productAlt) productForEdit.productAlt = productAlt;
  if(productType) productForEdit.productType = productType;
  if(productImage) productForEdit.productImage = productImage;

  res.send(`Product with the id ${id} has been updated!`);

}