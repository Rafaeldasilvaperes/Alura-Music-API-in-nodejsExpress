
import express from 'express';
import bodyParserConfig from '../middlewares/bodyParser.js';
// cors
import corsConfig from '../middlewares/cors.js';
import timeout from 'connect-timeout'

const app = express();

app.use(timeout('30s'));
// Middlewares
  // json 
bodyParserConfig(app);
  // cors
corsConfig(app);

export default app;