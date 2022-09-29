const express=require("express"),
      router=express.Router();
const { getUserLogin, postUserData, postComment,postUserCart,postUserPayment } = require("../../controllers/usersController");





router.get('/',getUserLogin)

router.post('/datauser',postUserData)

router.post("/checkoutpayment",postUserPayment)

router.post('/productusercart',postUserCart)
      

router.post('/comment', postComment )

     
      
module.exports=router;