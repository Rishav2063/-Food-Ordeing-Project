// models/Food.js
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Cake', foodSchema);
