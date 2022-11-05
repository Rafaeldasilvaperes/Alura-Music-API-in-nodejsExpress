import ProductModel from '../models/Product.js'

const Mongo = {
  // GET ALL
  async getAllProducts () {

    return await ProductModel.find();  
  },
  // POST ONE
  async postOneProduct (product) {

    return await ProductModel.create(product);
  },
  // GET ONE
  async getOneProduct (productId) {

    return await ProductModel.findOne({_id: productId})
  },
  // DELETE ONE
  async deleteOneProduct (productId) {

    return await ProductModel.deleteOne({_id: productId});
  },
  // EDIT ONE
  async editOneProduct (id, product) {

    return await ProductModel.updateOne({_id: id}, product);
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
