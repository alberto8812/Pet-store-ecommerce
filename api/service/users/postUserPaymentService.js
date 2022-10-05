require('dotenv').config()
const{STRIPE_PAY}=process.env
const Stripe = require("stripe");
const stripe = new Stripe(`${STRIPE_PAY}`);

const postUserPaymentService =async(req)=>{
    const { id, amount, description } = req.body;
 
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description,
        payment_method: id,
        confirm: true, //confirm the payment at the same time
  
})


return payment
}


module.exports = {
    postUserPaymentService
}