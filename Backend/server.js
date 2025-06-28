// server.js or index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize app
const app = express();

// ===== MIDDLEWARES ===== //

// Enable CORS (restrict if needed)
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// ===== DATABASE CONNECTION ===== //
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1); // Exit if DB fails
});

// ===== ROUTES ===== //
import burgerRoutes from './routes/burgerRoutes.js';
import pizzaRoutes from './routes/pizzaRoutes.js';
import southindianRoutes from './routes/southindianRoutes.js';
import cakeRoutes from './routes/cakeRoutes.js';
import purevegRoutes from './routes/purevegRoutes.js';
import chinesefoodRoutes from './routes/chinesefoodRoutes.js';
import authRoutes from './routes/auth.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// API route mounting
app.use('/api/burgers', burgerRoutes);
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/southindian', southindianRoutes);
app.use('/api/cakes', cakeRoutes);
app.use('/api/pureveg', purevegRoutes);
app.use('/api/chinesefood', chinesefoodRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/orders',orderRoutes);



// ===== FRONTEND ROUTE ===== //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== SERVER START ===== //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
