export function checkingForEmptyInput (input){
  if(Object.keys(input).length === 0){
    return ({
      status: 404,
      error: {
        message: "User not found",
        error: "You have to fill the inputs"
      }
    })
  }
}