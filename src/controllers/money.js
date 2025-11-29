import Transaction from "../models/Transaction.js";

let capacity = {1:10000,2:10000,5:10000,10:10000,20:10000};

export const changeMoney = async (req,res)=>{
  try {
    let amt = req.body.amount;
    let result = {};
    let den = [20,10,5,2,1];

    for(let d of den){
      let cnt = Math.floor(amt/d);
      if(cnt > capacity[d]) {

        await Transaction.create({
          userId: "unknown",
          amount: req.body.amount,
          denominations: "",
          status: "Failed"
        });
        return res.status(400).json({msg:'Capacity not available'});
      }
      result[d] = cnt;
      amt -= cnt*d;
    }

    for(let d of den) capacity[d] -= result[d];

    const denStr = Object.entries(result)
      .map(([k,v]) => `${k}=${v}`)
      .join("|");

    await Transaction.create({
      userId: "unknown", 
      amount: req.body.amount,
      denominations: denStr,
      status: "Success"
    });

    res.json({change:result});

  } catch (err) {
    res.status(500).json({error: err.message});
  }
};
