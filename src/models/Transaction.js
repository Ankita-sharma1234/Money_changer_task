import mongoose from "mongoose";

const txSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    denominations: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Transaction", txSchema);
