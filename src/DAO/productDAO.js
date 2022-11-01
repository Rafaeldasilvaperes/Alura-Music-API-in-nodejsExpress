import ProductModel from '../models/Product.js'


const Mongo = {
  async getAllProducts () {
    return await ProductModel.find();
  },
  async postOneProduct (product) {
    return await ProductModel.create(product);
  },
  async getOneProduct (productId) {
    return await ProductModel.findOne({_id: productId});
  },
  async deleteOneProduct (id) {
    return await ProductModel.findByIdAndDelete({_id: id});
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
