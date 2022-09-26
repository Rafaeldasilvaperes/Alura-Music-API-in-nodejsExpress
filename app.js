import express from 'express';
import bodyParser from 'body-parser';

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
// Port being served
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('Hello from the Alura Music Home Page ♫'));