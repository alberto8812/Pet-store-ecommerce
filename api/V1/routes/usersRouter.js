const express=require("express"),
      router=express.Router(),
      {jwtCheck,checkpermissions}=require('../../middleware/jwtLoginUser');
const { getUserLogin, postUserData } = require("../../controllers/usersController");




router
      .get('/',getUserLogin)

      .post('/datauser',postUserData)
      
module.exports=router;