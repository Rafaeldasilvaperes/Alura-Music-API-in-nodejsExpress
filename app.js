import express from 'express';
import bodyParser from 'body-parser';

// routes
import { router as usersRoutes } from './src/routes/users.js';

const app = express();
const PORT = 4242;

// Middleware
app.use(bodyParser.json()); 
// Endpoint
app.use('/users', usersRoutes)
// Port being served
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('Hello from the Home Page!'));