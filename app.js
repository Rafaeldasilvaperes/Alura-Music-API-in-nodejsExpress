import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoDBConn } from './src/config/mongoDB.js'
// routes
import { router as productsRoutes } from './src/routes/products.js';

// enviroment variables config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4242;

// Middlewares
  // json 
app.use(bodyParser.json());
  // cors
app.use(cors());
// Endpoints
app.use('/products', productsRoutes);
// Mongoose connection
mongoDBConn().then(() => {
  console.log('Mongoose is connected!');
  // PORT being served if Mongoose gets to be connected
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
})
.catch((err) => console.log(err));

// Home Page
app.get('/', (req, res) => res.sendFile('index.html', {root: './'}));

