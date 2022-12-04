import bcrypt from 'bcrypt';

export async function decrypt_password(inputPassword, dbPassword){
  const checkPW = await bcrypt.compare(inputPassword, dbPassword)
  if(checkPW){
    return true;
  }else{
    return false;
  }


}