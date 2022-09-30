import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// routes
import { router as productsRoutes } from './src/routes/products.js';

const app = express();
const PORT = process.env.PORT || 4242;

// enviroment variables
dotenv.config();

// Middleware
app.use(bodyParser.json()); 
// Endpoint
app.use('/products', productsRoutes)
// Mongoose connection
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PW}@amcluster.kpqq81v.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('Mongoose is connected!')
  // PORT being served
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
})
.catch((err) => console.log(err))

// Home Page
app.get('/', (req, res) => res.send('Hello from the Alura Music Home Page API ♫'));