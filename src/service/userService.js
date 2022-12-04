// Data Access Object for DB queries, obs.: without an interface
import { QueryDB2 } from '../DAO/userDAO.js';
import { checkingForUserErrors } from '../helpers/checkingForUserErrors.js';
import { checkingForEmptyInput } from '../helpers/checkingForEmptyInput.js';
import UserModel from '../models/User.js';
import { encryptPassword } from '../helpers/encryptPassword.js';
import { decrypt_password } from '../helpers/decryptPassword.js';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const DATABASE2 = QueryDB2.MongoUser;

const usersService = {
  // User Register Route
  async userRegister (user) {
    
    if(checkingForEmptyInput(user)){
      return checkingForEmptyInput(user);
    }

    if(checkingForUserErrors(user)){
      return ({
        status: 422,
        error: {
          message: "It was not possible register the user",
          error: checkingForUserErrors(user)
        }
      });
    }

    const { email, password } = user;
  
    const encryp_pw = await encryptPassword(password);
 
    const User = new UserModel({
      email,
      password: encryp_pw
    });
    
    try {
      const userAlreadyExists = await DATABASE2.getOneUserByEmail(email);
      if(userAlreadyExists != null){
        throw error
      }
      await DATABASE2.registerUser(User);

      return ({
        status: 201,
        user: {
          message: "User created!",
          newUser: email
        }
      })
    } catch (error) {
    
      return ({
        status: 422,
        error: {
          message: "Please use a different email",
          error: Object.keys(error).length > 0 ? error.message : `User with email ${email} already exists!`
        }
      });
    }
  },

  // User Login Route
  async userLogin (user) {

    if(checkingForEmptyInput(user)){
      return checkingForEmptyInput(user);
    }
    if(!user.email){
      return ({
        status: 422,
        error: {
          message: "It was not possible to login",
          error: "E-mail field can not be empty"
        }
      });
    }
    if(!user.password){
      return ({
        status: 422,
        error: {
          message: "It was not possible to login",
          error: "Password field can not be empty"
        }
      });
    }
    const {email, password} = user;
    try {
      const userExists = await DATABASE2.getOneUserByEmail(email);
      if(userExists == null){
        throw error
      }
      
      const compared_pw = await decrypt_password(password, userExists.password);
      
      if(!compared_pw){
        return ({
          status: 422,
          error: {
            message: "It was not possible to login",
            error: "Wrong credentials!"
        }
        })
      }
      try {
        const secret = process.env.SECRET;
        const token = jwt.sign({
          id: userExists._id,
        }, secret,)

        return ({
          status: 200,
          user: {
            message: "Authentication succeeded!",
            token: token
        }
        })

      } catch (error) {
        throw error;
      }
      
    } catch (error) {
      
      return ({
        status: 404,
        error: {
          message: "User not found",
          error: Object.keys(error).length > 0 ? error.message : `User with email ${email} doesn't exist!`
        }
      });
    }

  }
}

export const UsersService = {
  usersService
}