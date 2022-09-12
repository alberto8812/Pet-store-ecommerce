const express=require("express"),
      router=express.Router(),
      {getAllDogsData}=require('../../controllers/dogsController')


router
      .get('/',getAllDogsData)

module.exports=router;