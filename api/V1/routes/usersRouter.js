const express=require("express"),
      router=express.Router(),
      {jwtCheck,checkpermissions}=require('../../middleware/jwtLoginUser');
const { getUserLogin, postUserData, postComment,postUserCart } = require("../../controllers/usersController");




router
      .get('/',getUserLogin)

      .post('/datauser',postUserData)

      .post('/productusercart',postUserCart)

      .post('/comment/:id', postComment )

     
      
module.exports=router;