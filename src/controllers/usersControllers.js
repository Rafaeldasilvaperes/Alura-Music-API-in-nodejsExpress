// Products Service
import {UsersService} from '../service/usersService.js'

const SERVICE = UsersService.usersService

// POST - Register
export const userRegister = async (req, res) => {
  const userToBeRegister = req.body;
  const {email, password, confirmPassword, error} = await SERVICE.userRegister(userToBeRegister);

  //return res.status().send( ?  : );
}