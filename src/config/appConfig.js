
import express from 'express';
// bodyParser middleware
import bodyParserConfig from '../middlewares/bodyParser.js';
// cors
import corsConfig from '../middlewares/cors.js';
// Time limit for a requestion to await for an answer
import timeout from 'connect-timeout'
// routes
import { router as productsRoutes } from '../routes/products.js';
import { router as userRoutes } from '../routes/users.js'
// Mongo DB connection
import { mongoDBConn } from './mongoDB.js'
// Swagger for documentation
import swaggerUi from 'swagger-ui-express';
// documentation
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocs = require("../../swagger.json");


const app = express();
// Mongoose connection
mongoDBConn();

// Middlewares
  // middleware to give a limit time of waiting for a request to be answered
app.use(timeout('30s'));
  // json 
bodyParserConfig(app);
  // cors
corsConfig(app);

// Endpoints
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1/products', productsRoutes);
app.use('/v1/auth/', userRoutes);


export default app; 