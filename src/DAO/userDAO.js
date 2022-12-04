import UserModel from '../models/User.js'

const MongoUser = {
  
  // // POST ONE
  async registerUser (user) {
 
    return await UserModel.create(user);
  },
  // GET ONE
  async getOneUserByEmail (userEmail) {

    return await UserModel.findOne({email: userEmail})
  }
}

export const QueryDB2 = {
  MongoUser
}
