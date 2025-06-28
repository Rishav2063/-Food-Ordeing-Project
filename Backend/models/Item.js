import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  item_name: String,
  category: String,
  rating: Number,
  price: Number,
  image: String,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
