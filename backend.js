const express = require('express');
const cors = require('cors');
const { authRoutes, connectDB, authMiddleware, protectedRoutes } = require('modular-login-system');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes provided by your package
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/protected', authMiddleware, protectedRoutes); // Protected routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
