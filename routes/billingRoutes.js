const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // update user credits
    // redirect

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 5 credits"
    });

    req.user.credits += charge.amount / 100;
    const user = await req.user.save();

    res.send(user);
  });
};
