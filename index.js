import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(orderRoutes);

// Connecting to database
db.authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});