// middleware/auth.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to verify if the user is logged in
export const verifyUser = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token if 'Bearer ' prefix exists

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token to the request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
