const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes/orderRoutes')

const db = require('./config/database')

// Using .env
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

// Using middleware body json
app.use(express.json());
// For CORS Policy
app.use(cors());

// Using route middleware from orderRoutes
app.use('/', router);

// Connect to database
db.authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Listen to internet
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});