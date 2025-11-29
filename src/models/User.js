
import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  mobile: String,
  password: String
});
export default mongoose.model('User', UserSchema);
