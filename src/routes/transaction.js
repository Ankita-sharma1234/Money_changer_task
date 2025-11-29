import express from 'express';
import { listTx } from '../controllers/transaction.js';
const r = express.Router();
r.get('/list', listTx);
export default r;