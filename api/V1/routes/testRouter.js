const express=require("express"),
      router=express.Router(),
      {testController}=require('../../controllers/testController')

router
        .get('/',testController)


module.exports=router