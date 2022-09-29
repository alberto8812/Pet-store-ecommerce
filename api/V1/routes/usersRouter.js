const express=require("express"),
      router=express.Router();
const { getUserLogin, postUserData, postComment,postUserCart,postUserPayment } = require("../../controllers/usersController");




router
      .get('/',getUserLogin)

      .post('/datauser',postUserData)

      .post("/checkoutpayment",postUserPayment)

      .post('/productusercart',postUserCart)
      

      .post('/comment', postComment )

     
      
module.exports=router;