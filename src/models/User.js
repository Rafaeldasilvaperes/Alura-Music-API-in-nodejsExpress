import mongoose from 'mongoose';

const emailValidatorRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

// Solves the problem of mongoose returning first document from a different collection when query result is null
mongoose.set('strictQuery', false);
const User = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true, 
    required: [true, "Can not be empty"], 
    match: [emailValidatorRegex, 'This e-mail is invalid!'], 
    index: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true})

const UserModel = mongoose.model('User', User);
export default UserModel;
