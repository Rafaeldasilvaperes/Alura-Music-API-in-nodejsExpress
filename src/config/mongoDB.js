import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;

export const mongoDBConn = async () =>{
  
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PW}@amcluster.kpqq81v.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
      console.log("Mongoose is connected!");
    })
  } catch (error) {
   console.error("Connection failled!");
  }

}
