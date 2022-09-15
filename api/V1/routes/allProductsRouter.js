const express=require("express"),
      router=express.Router(),
      { getAllProductsData,getProductDetail}=require('../../controllers/productsController')


router
      .get('/', getAllProductsData)//llama a la funcion de controler productscontrollet para traer todos los productos

      .get('/detail/:id',getProductDetail)//llama a la funcion de controler productscontrollet para traer detalles

module.exports=router;