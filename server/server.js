import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRoutes from './routes/users/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT_NUMBER || 5000;

app.use(express.json());

// routes
app.use('/users', UserRoutes); 

app.get('/', (req, res) => {
    res.send("<div>This is the home page</div>")
});

app.listen(PORT, () => { 
    console.log(`Server started on port: ${PORT}`);
});