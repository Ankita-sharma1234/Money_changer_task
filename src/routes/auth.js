import express from 'express';
import { register, verifyOtp, setPassword, login } from '../controllers/auth.js';
const r = express.Router();
r.post('/register', register);
r.post('/verify-otp', verifyOtp);
r.post('/set-password', setPassword);
r.post('/login', login);
export default r;
