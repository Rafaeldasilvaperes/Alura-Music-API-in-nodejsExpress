import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoDBConn } from './src/config/mongoDB.js'
import timeout from 'connect-timeout'
// routes
import { router as productsRoutes } from './src/routes/products.js';

// enviroment variables config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4242;

app.use(timeout('30s'));
// Middlewares
  // json 
app.use(bodyParser.json());
  // cors
app.use(cors());
// Endpoints
app.use('/products', productsRoutes);


// Mongoose connection
mongoDBConn();
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

  
// Serving the app on PORT .env after moongose is connected

// Home Page
app.get('/', (req, res) => res.sendFile('index.html', {root: './'}));

