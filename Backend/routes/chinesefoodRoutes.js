import express from 'express';
import Chinese from '../models/Chinese.js'; // Use the shared Food model

const router = express.Router();

// GET /api/chinesefood → Fetch Chinese Food items
router.get('/', async (req, res) => {
  try {
    const chineseFood = await Chinese.find();
    res.json(chineseFood);
  } catch (err) {
    console.error('❌ Error fetching:', err);
    res.status(500).json({ error: 'Failed to fetch Chinese Food items' });
  }
});

export default router;
