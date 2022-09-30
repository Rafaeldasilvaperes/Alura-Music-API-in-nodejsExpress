import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// routes
import { router as productsRoutes } from './src/routes/products.js';

const app = express();
const PORT = process.env.PORT || 4242;

// Middleware
app.use(bodyParser.json()); 
// Endpoint
app.use('/products', productsRoutes)

// Mongoose connection
mongoose.connect(process.env.DB_CONN)
.then(() => {
  console.log('Mongoose is connected!')
  // Port being served
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
})
.catch((err) => console.log(err))


app.get('/', (req, res) => res.send('Hello from the Alura Music Home Page ♫'));