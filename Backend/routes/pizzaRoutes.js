import express from 'express';
import Pizza from '../models/Pizza.js'; // Or 'Food.js' if you're using a unified model

const router = express.Router();

// GET /api/pizzas → Fetch all pizza items (no filter)
router.get('/', async (req, res) => {
  try {
    const pizzas = await Pizza.find(); // No category filtering
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pizza items' });
  }
});

export default router;
