// import express from 'express';
// import Item from '../models/Item.js';

// const router = express.Router();

// router.get('/search', async (req, res) => {
//   const { q } = req.query;
//   try {
//     const results = await Item.find({
//       item_name: { $regex: q, $options: 'i' } // case-insensitive
//     });
//     res.status(200).json(results);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;
