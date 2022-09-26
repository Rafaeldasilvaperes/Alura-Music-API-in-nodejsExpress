import { addProductToDB } from "./addProductToDB.js";

const MAX_IDS = 1000000000;

const newID = () => {
  // generates random number between 1 to MAX_IDS
  const newId = Math.floor(Math.random() * MAX_IDS) + 1;
  return newId
}

export function createNewProduct(product, products){
  const id = newID();
  // checks if new generated number is equal to any id inside each object from the "products" array
  const index = products.findIndex((event) => event.id === id);
  try{
    if(index === -1){
      return addProductToDB(product, products, id);
      }
    if(index !== -1 && MAX_IDS > products.length){
      return createNewProduct(product, products);
    }
    if(products.length >= MAX_IDS) throw "product's limit, reached!"
  }catch(err){
      console.log(err)
      return
    }
}