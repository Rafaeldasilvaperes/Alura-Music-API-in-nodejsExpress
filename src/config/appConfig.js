
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
import { mongoDBConn } from './mongoDB.js'
// Swagger for documentation
// import swaggerUi from 'swagger-ui-express';
// documentation
// import swaggerDocs from '../../swagger.json'


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
app.use('/v1/products', productsRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
export default app;