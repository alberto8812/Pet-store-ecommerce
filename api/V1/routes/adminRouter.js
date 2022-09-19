const {CreateProductDb, DeleteProductDb}=require("../../controllers/adminController")

const express=require("express"),
      router=express.Router();


router 
        .get("/",(req,res)=>{
            console.log("estas en administrador rol")
            res.status(200).json({msg:"estas en administrador rol"})
            })

        .post("/create",CreateProductDb)

        .delete("/delete/:id", DeleteProductDb)

       



module.exports=router;