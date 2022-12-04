import UserModel from '../models/User.js'

const MongoUser = {
  
  // // POST ONE USER
  async registerUser (user) {
    return await UserModel.create(user);
  },
  // GET ONE USER BY EMAIL
  async getOneUserByEmail (userEmail) {
    return await UserModel.findOne({email: userEmail});
  },
  // GET ONE USER BY ID -PW
  async getOneUserById (id) {
    return await UserModel.findById(id, '-password');
  }
}

export const QueryDB2 = {
  MongoUser
}
