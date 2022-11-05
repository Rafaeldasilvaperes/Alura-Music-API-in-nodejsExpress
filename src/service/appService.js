
import express from 'express';
// bodyParser middleware
import bodyParserConfig from '../middlewares/bodyParser.js';
// cors
import corsConfig from '../middlewares/cors.js';
// Time limit for a requestion to await for an answer
import timeout from 'connect-timeout'
// routes
import { router as productsRoutes } from '../routes/products.js';
// Mongo DB connection
import { mongoDBConn } from '../config/mongoDB.js'

const app = express();

// Mongoose connection
mongoDBConn();

// middleware to give a limit time of waiting for a request to be answered
app.use(timeout('30s'));
// Middlewares
  // json 
bodyParserConfig(app);
  // cors
corsConfig(app);
// Endpoints
app.use('/products', productsRoutes);

export default app;