import dotenv from 'dotenv';
dotenv.config();

export function validateApiKey(req, res, next){
  const API_KEY = process.env.API_KEY;
  let APIKEY = req.query.api_key;
  if(APIKEY !== API_KEY.toString()) {
    return res.status(401).send({message: "You are not allowed without an API key!"});
  } else{
    return next();
  }
}