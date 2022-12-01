import mongoose from 'mongoose';
import uniqueValidatorMongoose from 'mongoose-unique-validator';
import pwCrypto from 'crypto';
import JWT from 'jsonwebtoken';
import SECRET from '(../config).secret';

const emailValidatorRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

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
    type: Number,
    required: true
  }
}, {timestamps: true})

User.plugin(uniqueValidatorMongoose, {message: 'This user already exists!'});

User.methods.setPassword = function(password){
  this.salt = pwCrypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

User.methods.validPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
}

const UserModel = mongoose.model('User', User);
export default UserModel;
