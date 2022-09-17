const express=require("express"),
      router=express.Router(),
      {jwtCheck,checkpermissions}=require('../../middleware/jwtLoginUser');

const { getUserLogin } = require("../../controllers/usersController");




router
      .get('/',jwtCheck,getUserLogin) 

module.exports=router;