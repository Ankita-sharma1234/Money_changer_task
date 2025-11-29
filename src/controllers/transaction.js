import Transaction from "../models/Transaction.js";

export const listTx = async (req, res) => {
  try {
    let { fromDate, toDate } = req.query;

    if (!fromDate) fromDate = "2000-01-01";
    if (!toDate) toDate = "2050-01-01";

    const tx = await Transaction.find({
      createdAt: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      },
    }).sort({ createdAt: -1 });

    return res.json(tx);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
