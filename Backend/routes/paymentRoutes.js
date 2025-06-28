// // routes/paymentRoutes.js
// import express from 'express';
// import Burger from '../models/burger.js';
// import Pizza from '../models/Pizza.js';
// // import Cake from '../models/Cake.js';
// import ChineseFood from '../models/Chinese.js'; // Assuming you have a model for Chinese food

// const router = express.Router();

// // Dynamic route for different categories
// router.get('/:category/:id', async (req, res) => {
//   const { category, id } = req.params;
//   let item;

//   try {
//     // Dynamically choose the model based on category
//     if (category === 'burgers') {
//       item = await Burger.findById(id);
//     } else if (category === 'pizzas') {
//       item = await Pizza.findById(id);}
//     // } else if (category === 'cakes') {
//     //   item = await Cake.findById(id);
//     // } 
//     else if (category === 'chinesefood') {
//       item = await ChineseFood.findById(id);
//     }

//     // If the item is not found, return an error
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.status(200).json(item); // Send item details
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;
