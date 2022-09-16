const express=require("express"),
      router=express.Router(),
      { getAllProductsData,getProductDetail,getProductName}=require('../../controllers/productsController')


router
      .get('/', getAllProductsData)//llama a la funcion de controller productscontrollet para traer todos los productos

      .get('/detail/:id',getProductDetail)//llama a la funcion de controller productscontrollet para traer detalles

      .get('/name',getProductName)//llama a la funcion controller productscontrllet para buscar pos nombre 
      
module.exports=router;