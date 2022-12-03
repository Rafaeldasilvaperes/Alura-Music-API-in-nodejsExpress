import UserModel from '../models/Product.js'

const Mongo = {
  // GET ALL
  // async getAllProducts () {

  //   return await UserModel.find();  
  // },


  // // POST ONE
  async registerUser (user) {

    return await UserModel.create(user);
  },
  // GET ONE
  async getOneUser (userId) {

    return await UserModel.findOne({_id: userId})
  }


  // // DELETE ONE
  // async deleteOneProduct (productId) {

  //   return await UserModel.deleteOne({_id: productId});
  // },
  // // EDIT ONE
  // async editOneProduct (id, product) {

  //   return await UserModel.updateOne({_id: id}, product);
  // }
}


export const QueryDB = {
  Mongo
}
