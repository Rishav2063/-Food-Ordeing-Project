import express from 'express';
import Pureveg from '../models/Pureveg.js'; // Use the shared Food model

const router = express.Router();

// GET /api/pureveg → Fetch Pure Veg items
router.get('/', async (req, res) => {
  try {
    const pureveg = await Pureveg.find();
    res.json(pureveg);
  } catch (err) {
    console.error('❌ Error fetching:', err);
    res.status(500).json({ error: 'Failed to fetch Pure Veg items' });
  }
});

export default router;
