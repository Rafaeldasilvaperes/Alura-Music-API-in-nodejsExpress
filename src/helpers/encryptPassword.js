import bcrypt from 'bcrypt';

export async function encryptPassword(password){
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword;
}