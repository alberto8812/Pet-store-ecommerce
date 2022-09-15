const { getUserLogin } = require("../../controllers/usersController");

const express=require("express"),
      router=express.Router();

router.get('/', getUserLogin) 

module.exports=router;