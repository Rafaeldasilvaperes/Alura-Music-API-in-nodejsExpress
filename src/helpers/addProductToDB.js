export async function addProductToDB(product, products, id){
  const productWithID = {id: id, ...product };
  try {
    await products.push(productWithID);
    res.status(201).json({message: "Product successfully added to DataBase"});
  } catch (error) {
    res.status(500).send({ error: error });
  }
  
  return products.push(productWithID);
}