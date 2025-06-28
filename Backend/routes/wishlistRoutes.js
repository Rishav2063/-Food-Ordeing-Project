import express from 'express';
import mongoose from 'mongoose';
import { verifyUser } from '../middleware/auth.js';
import Wishlist from '../models/Wishlist.js';
import Item from '../models/Item.js';

const router = express.Router();

// ✅ Add item to wishlist
// ✅ Add item to wishlist
// ✅ Add item to wishlist
router.post('/add/:itemId', verifyUser, async (req, res) => {
  const { itemId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(itemId)) {
    return res.status(400).json({ message: 'Invalid item ID' });
  }

  try {
    const itemExists = await Item.findById(itemId);
    if (!itemExists) {
      console.warn(`⚠️ not found ID: ${itemId}`);
      return res.status(404).json({ message: 'Item not found in database' });
    }

    let wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, items: [] });
    }

    const alreadyExists = wishlist.items.some(item => item.item_id.toString() === itemId);
    if (alreadyExists) {
      return res.status(400).json({ message: 'Item is already in your wishlist' });
    }

    wishlist.items.push({ item_id: itemId });
    await wishlist.save();

    res.status(200).json({ message: 'Item added to wishlist', wishlist });
  } catch (err) {
    console.error("❌ Error in wishlist route:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 📥 Get user’s wishlist (with item details)
// 📥 Get user’s wishlist (with item details)
router.get('/', verifyUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('items.item_id');

    if (!wishlist || wishlist.items.length === 0) {
      console.log(`ℹ️ Empty wishlist for user: ${req.user.id}`);
      return res.status(200).json({ items: [] });
    }

    // Check for items that failed to populate
    wishlist.items.forEach(item => {
      if (!item.item_id) {
        console.warn(`⚠️ Item not found in DB for ID: ${item._id}`);
      }
    });

    res.status(200).json(wishlist);
  } catch (err) {
    console.error('❌ Error fetching wishlist:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// ❌ Remove item from wishlist
router.delete('/remove/:itemId', verifyUser, async (req, res) => {
  const { itemId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(itemId)) {
    console.error(`❌ Invalid itemId format: ${itemId}`);
    return res.status(400).json({ message: 'Invalid item ID' });
  }

  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) {
      console.warn(`⚠️ Wishlist not found for user: ${req.user.id}`);
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    const itemIndex = wishlist.items.findIndex(item => item.item_id.toString() === itemId);
    if (itemIndex === -1) {
      console.warn(`⚠️ Item ${itemId} not found in wishlist`);
      return res.status(404).json({ message: 'Item not found in wishlist' });
    }

    wishlist.items.splice(itemIndex, 1);
    await wishlist.save();

    console.log(`🗑️ Item ${itemId} removed from wishlist of user ${req.user.id}`);
    res.status(200).json({ message: 'Item removed from wishlist' });

  } catch (err) {
    console.error('❌ Error in DELETE /wishlist/remove/:itemId route:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


export default router;
