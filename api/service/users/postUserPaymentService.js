
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51LkfWEIzGpa9z0EFyh2s6ZllQ7WWYamRZ73C8E8BvU8reKDZs1PtQuXs0BcBdjvWTP5mcIysLhleVAeajwYByS6Q00vuHh06XT");

const postUserPaymentService =async(req)=>{
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Gaming Keyboard",
        payment_method: id,
        confirm: true, //confirm the payment at the same time
  
})
return payment
}


module.exports = {
    postUserPaymentService
}