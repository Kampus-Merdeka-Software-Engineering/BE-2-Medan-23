import Order from '../models/Order.js';

export const orderData = async (req, res) => {
  try {
    const { name, email, order } = req.body;

    if (!name || !email || !order) {
      return res.status(400).json({ error: 'Name, email, and order details are required.' });
    }

    const createdOrder = await Order.create({
      name,
      email,
      order,
    });

    res.status(201).json({ msg: 'Coffee order placed successfully', orderId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
