const express=require("express"),
      router=express.Router(),
      {CreateProductDb}=require('../../controllers/ProductCreate')


router
      .post('/',CreateProductDb)

module.exports=router