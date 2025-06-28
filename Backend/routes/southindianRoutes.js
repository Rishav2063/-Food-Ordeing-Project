import express from 'express';
import SouthIndian from '../models/Southindian.js'; // Correct model import

const router = express.Router();

// GET /api/southindian
router.get('/', async (req, res) => {
  try {
    const items = await SouthIndian.find(); // Fetch all South Indian items
    res.json(items);
  } catch (err) {
    console.error('❌ Error fetching South Indian items:', err);
    res.status(500).json({ error: 'Failed to fetch South Indian items' });
  }
});

export default router;
