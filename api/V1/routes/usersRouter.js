const express=require("express"),
      router=express.Router();

const { getUserLogin } = require("../../controllers/usersController");




router
      .get('/',getUserLogin) 

module.exports=router;