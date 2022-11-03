export function checkingForErrors(product){
  const { productName, productPrice, productDesc, productAlt, productType, productImage } = product
  
  const errors = []
  
  const error = {
    err: []
  }

  if(!productName) {errors.push("Product Name is required")}
  if(!productPrice) {errors.push("Product Price is required")}
  if(!productDesc) {errors.push("Product Description is required")}
  if(!productAlt) {errors.push("Product Image Description is required")}
  if(!productType) {errors.push("Product Type is required")}
  if(!productImage) {errors.push("Product Image is required")}
 


  if(errors.length !== 0){
    error.err.push(errors);
    return error.err
  }
 
  
}