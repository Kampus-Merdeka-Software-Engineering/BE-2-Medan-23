const express = require('express')
const router = express.Router()

const { orderData, addOrderData } = require ('../controllers/orderController');

// HTTP GET request to get all orders
router.get('/', orderData)

// HTTP POST request to add order
router.post('/add', addOrderData)

module.exports = router;