// App already configured in appService.js
import app from './src/config/appConfig.js'
// enviroment variables config
import dotenv from 'dotenv';
dotenv.config();

// set a env. for your PORT. It will use 4242 as default
const PORT = process.env.PORT || 4242;
// Serving the app
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
// Home Page
app.get('/', (req, res) => res.sendFile('index.html', { root: './' }));

