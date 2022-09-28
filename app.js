import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// routes
import { router as productsRoutes } from './src/routes/products.js';

const app = express();
const PORT = process.env.PORT || 4242;


// db connection string
// mongodb+srv://rafaelPeres:<password>@amcluster.kpqq81v.mongodb.net/?retryWrites=true&w=majority

// Middleware
app.use(bodyParser.json()); 
// Endpoint
app.use('/products', productsRoutes)

// Mongoose connection

// const DB_USER = 'rafaelPeres';
// const DB_PW = encodeURIComponent('XQmdOeSRy2Eda5Tf');


mongoose.connect(process.env.DB_CONN)
.then(() => {
  console.log('Mongoose is connected!')
  // Port being served
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
})
.catch((err) => console.log(err))




app.get('/', (req, res) => res.send('Hello from the Alura Music Home Page ♫'));