import express from 'express'; 
import { changeMoney } from '../controllers/money.js'; 
const r = express.Router(); 
r.post('/change', changeMoney); 
export default r;