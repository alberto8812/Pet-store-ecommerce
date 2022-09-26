

const {CreateProductDb, DeleteProductDb,statisticsProductDb}=require("../../controllers/adminController")
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

        .post("/create",CreateProductDb)

        .delete("/delete/:id", DeleteProductDb)

       



module.exports=router;