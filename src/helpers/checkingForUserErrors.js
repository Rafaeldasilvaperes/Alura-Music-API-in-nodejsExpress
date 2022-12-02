export function checkingForUserErrors(user){
  const { email, password, confirmPassword } = user
  
  const errors = []
  
  const error = {
    err: []
  }

  if(!email) {errors.push("E-mail can't be empty")}
  if(!password) {errors.push("Password field can't be empty")}
  if(!confirmPassword) {errors.push("Password field can't be empty")}

  if(errors.length !== 0){
    error.err.push(errors);
    return error.err
  }
 
  
}