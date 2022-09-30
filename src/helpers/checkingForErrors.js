export function checkingForErrors(product){
  const { productName, productPrice, ProductDesc, productAlt, productType, productImage } = product
  const errors = []

  if(!productName) {errors.push({message: "Product Name is required"})}
  if(!productPrice) {errors.push({message: "Product Price is required"})}
  if(!ProductDesc) {errors.push({message: "Product Description is required"})}
  if(!productAlt) {errors.push({message: "Product Image Description is required"})}
  if(!productType) {errors.push({message: "Product Type is required"})}
  if(!productImage) {errors.push({message: "Product Image is required"})}
 
  if(errors.length !== 0){
    return errors;
  }
  
}