const { allCategorys } = require("../../controllers/categotyController");

const express=require("express"),
      router=express.Router();

router.get('/', allCategorys) 

module.exports=router;