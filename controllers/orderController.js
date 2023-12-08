const Order = require('../models/order')

// get all orders
const orderData = async (req, res, next) => {
  try {
    // Find all users
    const orders = await Order.findAll();

    // Send json all orders
    res.status(201).json({ data: orders })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// add order
const addOrderData = async (req, res, next) => {
  try {

    // get json body
    const { name, email, order } = req.body;

    // minimal validate - not empty
    if (!name || !email || !order) {
      return res.status(400).json({ error: 'Name, email, and order details are required.' });
    }

    // create order
    const createdOrder = await Order.create({
      name,
      email,
      order,
    });

    res.status(201).json({ msg: 'Coffee order placed successfully', createdOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { orderData, addOrderData };