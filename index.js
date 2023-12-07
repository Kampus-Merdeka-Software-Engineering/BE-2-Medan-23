const express = require('express')
const router = require('./routes/orderRoutes')

const app = express()
const port = process.env.PORT || 3000

// Using route middleware from orderRoutes
app.use('/', router);

// Listen to internet
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});