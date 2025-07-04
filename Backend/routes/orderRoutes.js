import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// POST: Place a new order
router.post('/', async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      pincode,
      paymentMethod,
      couponCode,
      paymentDetails,
    } = req.body;

    if (!name || !address || !city || !pincode || !paymentMethod) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Optional: Server-side validation for payment details
    if (paymentMethod === 'card') {
      if (
        !paymentDetails?.cardNumber ||
        !paymentDetails?.cardExpiry ||
        !paymentDetails?.cardCVV
      ) {
        return res.status(400).json({ message: 'Incomplete card details' });
      }
    } else if (paymentMethod === 'upi') {
      if (!paymentDetails?.upiId) {
        return res.status(400).json({ message: 'UPI ID is required' });
      }
    }

    const newOrder = new Order({
      name,
      address,
      city,
      pincode,
      paymentMethod,
      couponCode,
      paymentDetails,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder._id });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET: Fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
