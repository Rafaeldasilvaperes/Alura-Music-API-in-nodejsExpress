import ProductModel from '../models/Product.js'


const Mongo = {
  async getAllProducts () {
    try {
      const products = await ProductModel.find();
      return ({
        status: true,
        products: products
        });
    } catch (error) {
      return ({
        status: false,
        error: {
          message: "Products not found!",
          error} 
        });
    }
    
  },
  async postOneProduct (product) {
    try {
      const productPosted = await ProductModel.create(product);
      return ({
        status: true,
        product: productPosted
        });
      
    } catch (error) {
      return ({
        status: false,
        error: {
          message: "It was not possible to add the product",
          error} 
        });
    }
  },
  async getOneProduct (productId) {
    try {
      const foundProduct = await ProductModel.findOne({_id: productId});
      return ({
        status: true,
        product: foundProduct
        })
    } catch (error) {
      return ({
        status: false,
        error: {
          message: `Product with id: ${productId} not found!`,
          error} 
        })
    }
  },
  async deleteOneProduct (productId) {
    try {
      const product = await ProductModel.findOne({_id: productId});
      if(product !== null){
        await ProductModel.deleteOne({_id: productId});
      }else{
        throw new error
      }
      return ({
        status: true,
        product: product
        });
    } catch (error) {
      return ({
        status: false,
        error: {
          message: `Product with id: ${productId} not found!`,
          error} 
        })
    }
  },
  async editOneProcut (id, product) {
     try {
      const productToBeEdited = await ProductModel.findOne({_id: id});
      if(productToBeEdited !== null){
        await ProductModel.updateOne({_id: id}, product);
      }else{
        throw new error
      }
      const productEditedForClient = await ProductModel.findOne({_id: id});
      return ({
        status: true,
        product: productEditedForClient
        });

      } catch (error) {
        return ({
          status: false,
          error: {
            message: `Product with id: ${id} not found!`,
            error} 
          });
    }
  }
}

const MySQL = {
  async getAllProducts () {
    
  }
}

const SQLServer = {
  async getAllProducts () {
    
  }
}


export const QueryDB = {
  Mongo,
  MySQL,
  SQLServer
}
