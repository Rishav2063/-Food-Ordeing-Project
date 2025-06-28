import express from 'express';
import Cake from '../models/cake.js';

const router = express.Router();

// GET /api/cakes → Fetch Cake items
router.get('/', async (req, res) => {
  try {
    const cakes = await Cake.find(); // ✅ Corrected here
    res.json(cakes);
  } catch (err) {
    console.error('❌ Error fetching:', err);
    res.status(500).json({ error: 'Failed to fetch Cake items' });
  }
});

export default router;
