const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const userRoutes = require('./routers/UserRoutes');

// Middleware
app.use(express.json()); // This is needed to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Use routes
app.use('/api', userRoutes); // This will prefix all routes in userRoutes with '/api'

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
