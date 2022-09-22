const express=require("express"),
      router=express.Router(),
      {jwtCheck,checkpermissions}=require('../../middleware/jwtLoginUser');
const { getUserLogin, postUserData, postComment } = require("../../controllers/usersController");




router
      .get('/',getUserLogin)

      .post('/datauser',postUserData)

      .post('/comment/:id', postComment )
      
module.exports=router;