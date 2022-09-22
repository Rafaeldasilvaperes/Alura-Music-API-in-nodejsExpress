import { createNewUser } from '../IDgenerator.js'

let users = [];

export const getAllUsers = (req, res) =>{
  res.send(users)
}

export const createUser = (req, res) => {
  const user = req.body;
  createNewUser(user, users)
  res.send(`User "${user.firstName} ${user.lastName}" added to the database!`)
}

export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  console.log(foundUser)
  res.send(foundUser);
}

export const deleteUser = (req, res) => {
  
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with id "${id}" deleted from database!`)
}

export const editUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userForEdit = users.find((user) => user.id == id);

  if(firstName) userForEdit.firstName = firstName;
  if(lastName) userForEdit.lastName = lastName;
  if(age) userForEdit.age = age;

  res.send(`User with the id ${id} has been updated!`)

}