const express=require("express"),
      router=express.Router(),
      {jwtCheck,checkpermissions}=require('../../middleware/jwtLoginUser');
const { getUserLogin, postUserData, postComment,postUserCart,postUserPayment } = require("../../controllers/usersController");


/////holiiiiiiiiiiiiiiiiiiiiii

router
      .get('/',getUserLogin)

      .post('/datauser',postUserData)

      .post("/checkoutpayment",postUserPayment)

      .post('/productusercart',postUserCart)
      

      .post('/comment/:id', postComment )

     
      
module.exports=router;