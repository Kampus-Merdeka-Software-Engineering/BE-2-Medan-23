import express from 'express';
import { orderData } from './controllers/orderController.js';

const router = express.Router();

router.post('/orders', orderData);

export default router;
