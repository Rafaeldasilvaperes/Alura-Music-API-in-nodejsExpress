import { addProductToDB } from "./addProductToDB.js";

const MAX_IDS = 1000000000;

const newID = () => {
  // generates random number between 1 to MAX_IDS
  const newId = Math.floor(Math.random() * MAX_IDS) + 1;
  return newId
}

export function createNewUser(user, users){
  const id = newID();
  // checks if new generated number is equal to any id inside each object from the "users" array
  const index = users.findIndex((event) => event.id === id);
  try{
    if(index === -1){
      return addProductToDB(user, users, id);
      }
    if(index !== -1 && MAX_IDS > users.length){
      return createNewUser(user, users);
    }
    if(users.length >= MAX_IDS) throw "User's limit, reached!"
  }catch(err){
      console.log(err)
      return
    }

}