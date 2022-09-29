

const {CreateProductDb, EditProductDb, DeleteProductDb,statisticsProductDb,customerShoppingDb }=require("../../controllers/adminController")
const {db,Op}=require('../../database/db')
const {Sale}=db.models//practica
const express=require("express"),
      router=express.Router();



router.get("/",(req,res)=>{
            console.log("estas en administrador rol")
            res.status(200).json({msg:"estas en administrador rol"})
            })

router.get("/graphics",statisticsProductDb)

router.get("/customerShopping",customerShoppingDb)

router.post("/create",CreateProductDb)

router.put("/edit/:id", EditProductDb )

router.delete("/delete/:id", DeleteProductDb)

       

       



module.exports=router;