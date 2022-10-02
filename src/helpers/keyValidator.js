import dotenv from 'dotenv';
dotenv.config();

export function validateApiKey(req){
  const API_KEY = process.env.API_KEY;
  let APIKEY = req.query.api_key;
  if(APIKEY !== API_KEY.toString()) {
    return false
  } else{
    return true
  }
}