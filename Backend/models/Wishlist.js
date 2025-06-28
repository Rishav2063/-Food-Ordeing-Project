import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      }
    }
  ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
