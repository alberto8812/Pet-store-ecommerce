

const {CreateProductDb, DeleteProductDb}=require("../../controllers/adminController")
const {db,Op}=require('../../database/db')
const {Sale}=db.models//practica
const express=require("express"),
      router=express.Router();


router 
        .get("/",(req,res)=>{
            console.log("estas en administrador rol")
            res.status(200).json({msg:"estas en administrador rol"})
            })

        .get("/sell",async(req,res)=>{
            const sale=await Sale.findAll({attributes:['month',[db.fn('sum',db.col('total')),'total'],],where:{year:2022},group:['month']})
            res.status(202).json(sale)
        })

        .post("/create",CreateProductDb)

        .delete("/delete/:id", DeleteProductDb)

       



module.exports=router;