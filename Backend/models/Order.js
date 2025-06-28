import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  paymentMethod: { type: String, enum: ['card', 'upi', 'cod'], required: true },
  couponCode: { type: String },

  paymentDetails: {
    cardNumber: { type: String },
    cardExpiry: { type: String },
    cardCVV: { type: String },
    upiId: { type: String },
  },

  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;
