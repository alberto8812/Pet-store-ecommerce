const { getUserLogin } = require("../../controllers/usersController");

const express=require("express"),
      router=express.Router();

routers.get('/', getUserLogin) 

module.exports=router;