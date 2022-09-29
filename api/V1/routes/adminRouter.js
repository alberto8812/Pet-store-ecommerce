

const {CreateProductDb, EditProductDb, DeleteProductDb,statisticsProductDb,customerShoppingDb }=require("../../controllers/adminController")
const {db,Op}=require('../../database/db')
const {Sale}=db.models//practica
const express=require("express"),
      router=express.Router();


      router

        .get("/",(req,res)=>{
            console.log("estas en administrador rol")
            res.status(200).json({msg:"estas en administrador rol"})
            })

        .get("/graphics",statisticsProductDb)

        .get("/customerShopping",customerShoppingDb)

        .post("/create",CreateProductDb)

<<<<<<< HEAD
    
=======
        .put("/edit/:id", EditProductDb )

>>>>>>> 1c2df9adeb0ffe09eeb1aa4ddc9256fa2c30e02f
        .delete("/delete/:id", DeleteProductDb)

       

       



module.exports=router;