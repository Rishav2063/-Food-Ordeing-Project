// import express from 'express';
// import Order from '../models/Order.js';

// const router = express.Router();

// router.post('/api/orders', async (req, res) => {
//   try {
//     const {
//       name,
//       address,
//       city,
//       pincode,
//       paymentMethod,
//       couponCode,
//       paymentDetails,
//     } = req.body;

//     if (!name || !address || !city || !pincode || !paymentMethod) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Optional: Add server-side validation for payment details based on payment method
//     if (paymentMethod === 'card') {
//       if (
//         !paymentDetails?.cardNumber ||
//         !paymentDetails?.cardExpiry ||
//         !paymentDetails?.cardCVV
//       ) {
//         return res.status(400).json({ message: 'Incomplete card details' });
//       }
//     } else if (paymentMethod === 'upi') {
//       if (!paymentDetails?.upiId) {
//         return res.status(400).json({ message: 'UPI ID is required' });
//       }
//     }

//     // Create and save the order
//     const newOrder = new Order({
//       name,
//       address,
//       city,
//       pincode,
//       paymentMethod,
//       couponCode,
//       paymentDetails,
//     });

//     await newOrder.save();

//     res.status(201).json({ message: 'Order placed successfully', orderId: newOrder._id });
//   } catch (err) {
//     console.error('Error placing order:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;
