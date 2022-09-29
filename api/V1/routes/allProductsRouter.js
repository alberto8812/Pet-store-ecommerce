const express=require("express"),
      router=express.Router(),
      { getAllProductsData,getProductDetail,getProductSearch}=require('../../controllers/productsController')



      router.get('/', getAllProductsData)//llama a la funcion de controller productscontrollet para traer todos los productos

      router.get('/search',getProductSearch)//llama a la funcion controller productscontrllet para buscar por nombre,genero y categoria 
      
     router.get('/detail/:id',getProductDetail)//llama a la funcion de controller productscontrollet para traer detalles

    
      
module.exports=router;