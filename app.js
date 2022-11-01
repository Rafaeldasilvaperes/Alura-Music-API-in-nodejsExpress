// App already configured in Appservice.js
import app from './src/service/appService.js'
// Mongo DB connection
import { mongoDBConn } from './src/config/mongoDB.js'
// routes
import { router as productsRoutes } from './src/routes/products.js';
// enviroment variables config
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4242;
// Endpoints
app.use('/products', productsRoutes);
// Mongoose connection
mongoDBConn();
// Serving the app on PORT .env after moongose is connected
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
// Home Page
app.get('/', (req, res) => res.sendFile('index.html', {root: './'}));

