import express from 'express';
import Burger from '../models/burger.js';

const router = express.Router();

// Get single burger by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Burger.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all burgers
router.get('/', async (req, res) => {
  try {
    const items = await Burger.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch burgers' });
  }
});

export default router;
