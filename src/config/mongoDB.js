import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;

export const mongoDBConn = () =>{
  return mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PW}@amcluster.kpqq81v.mongodb.net/?retryWrites=true&w=majority`)
}
