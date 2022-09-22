export function addUserToDB(user, users, id){
  const userWithId = { ...user, id: id};
  return users.push(userWithId);
}