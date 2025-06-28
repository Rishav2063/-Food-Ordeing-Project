import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  image: { type: String, required: true },
});

export default mongoose.model('Burger', foodItemSchema);
