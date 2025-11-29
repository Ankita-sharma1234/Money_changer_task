import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => { res.json({ msg: 'OTP Sent' }); };
export const verifyOtp = async (req, res) => { res.json({ msg: 'OTP Verified' }); };

export const setPassword = async (req, res) => {
  const { mobile, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ mobile, password: hash });
  res.json({ msg: 'Password Set' });
};

export const login = async (req, res) => {
  const { mobile, password } = req.body;

  const u = await User.findOne({ mobile });
  if (!u) return res.status(400).json({ msg: 'Invalid' });
  const ok = await bcrypt.compare(password, u.password);

  if (!ok) return res.status(400).json({ msg: 'Wrong Password' });
  const token = jwt.sign({ id: u._id }, 'secret');
  res.json({ token });
};
