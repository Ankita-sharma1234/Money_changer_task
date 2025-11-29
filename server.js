import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './src/routes/auth.js';
import moneyRoutes from './src/routes/money.js';
import txRoutes from './src/routes/transaction.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/moneychanger');

app.use('/auth', authRoutes);
app.use('/money', moneyRoutes);
app.use('/transaction', txRoutes);

app.listen(5000);
