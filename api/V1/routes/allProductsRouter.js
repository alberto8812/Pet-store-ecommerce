const express=require("express"),
      router=express.Router(),
      { getAllProductsData}=require('../../controllers/productsController')


router
      .get('/', getAllProductsData)

module.exports=router;