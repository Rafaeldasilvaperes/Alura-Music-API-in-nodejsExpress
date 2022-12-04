// Products Service
import { UsersService } from '../service/userService.js';

const SERVICE2 = UsersService.usersService;

// POST - Register
export const userRegister = async (req, res) => {
  const userToBeRegister = req.body;
  const {status, error, user} = await SERVICE2.userRegister(userToBeRegister);

  return res.status(status).json( user ? user : error );
}

export const userLogin = async (req, res) => {
  const userToLogIn = req.body;
  const {status, error, user} = await SERVICE2.userLogin(userToLogIn);

  return res.status(status).json( user ? user : error );
}

export const getUser = async (req, res) => {
  const { id } = req.params;
  const {status, error, user} = await SERVICE2.getUser(id);

  return res.status(status).json( user ? user : error );
}