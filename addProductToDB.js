export function addProductToDB(product, products, id){
  const productWithID = { ...product, id: id};
  return products.push(productWithID);
}