// Products Service
import { UsersService } from '../service/userService.js';

const SERVICE = UsersService.usersService;

// POST - Register
export const userRegister = async (req, res) => {
  const userToBeRegister = req.body;
  const {status, error, user} = await SERVICE.userRegister(userToBeRegister);

  return res.status(status).json( user ? user : error );
}