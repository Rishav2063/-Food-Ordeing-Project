// models/FoodItem.js
import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  item_name: String,
  price: Number,
  rating: Number,
  image: String,
  category: String, // optional, for filtering
});

export default mongoose.model('FoodItem', foodItemSchema);
