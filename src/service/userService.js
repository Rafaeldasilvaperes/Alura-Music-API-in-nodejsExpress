// Data Access Object for DB queries, obs.: without an interface
import { QueryDB } from '../DAO/productDAO.js'

const DATABASE = QueryDB.Mongo

const productService = {
  async userRegister (user) {
    const User = {
      ...user
    }

    const {email, password, confirmPassword} = user;

    if(checkingForUserErrors(user)){
      return ({
        status: 422,
        error: {
          message: "It was not possible to add the product",
          error: checkingForUserErrors(user)
        }
      })
    }
    
  }
}