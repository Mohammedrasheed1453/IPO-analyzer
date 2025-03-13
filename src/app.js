// app.js
import express from 'express';
import cors from 'cors';  // ✅ Correct Import
import userRoutes from './routes/userRoutes.js';
import { checkConnection } from './config/db.js';
import createAllTable from './utils/dbUtils.js';
import authRoutes from './routes/authRoutes.js';


const app = express();

// ✅ Place express.json() first
app.use(express.json());

// ✅ Proper CORS middleware placement
app.use(cors({
    origin: 'http://localhost:3001',  // Allow frontend origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


// ✅ Global Error Handling Middleware (Keep this at the bottom)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// ✅ Server Initialization
async function initializeServer() {
    try {
        await checkConnection();
        await createAllTable();
        console.log('Database initialized successfully');
        
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    } catch (error) {
        console.error("Failed to initialize the database:", error);
        process.exit(1);
    }
}

initializeServer();
