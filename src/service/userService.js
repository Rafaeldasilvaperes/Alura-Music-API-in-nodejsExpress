// Data Access Object for DB queries, obs.: without an interface
import { QueryDB } from '../DAO/productDAO.js'
import { checkingForUserErrors } from '../helpers/checkingForUserErrors.js'
import { checkingForEmptyInput } from '../helpers/checkingForEmptyInput.js'

const DATABASE = QueryDB.Mongo

const usersService = {
  async userRegister (user) {
    
    if(checkingForEmptyInput(user)){
      return checkingForEmptyInput(user)
    }
    console.log(user)
    const User = {
      ...user
    }


    if(checkingForUserErrors(user)){
      return ({
        status: 422,
        error: {
          message: "It was not possible register the user",
          error: checkingForUserErrors(user)
        }
      })
    }
    return ({
      status: 200,
      user: {
        message: "User created!",
        newUser: User.email
      }
    })
    
    
  }
}

export const UsersService = {
  usersService
}