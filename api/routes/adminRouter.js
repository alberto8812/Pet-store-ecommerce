

const {CreateProductDb, EditProductDb, DeleteProductDb,statisticsProductDb,customerShoppingDb,customerShoppingStatusDb }=require("../controllers/adminController")

const express=require("express"),
      router=express.Router();



router.get("/",(req,res)=>{
            console.log("estas en administrador rol")
            res.status(200).json({msg:"estas en administrador rol"})
            })

router.get("/graphics",statisticsProductDb)//ruta para obtener todas las graficas

router.get("/customerShopping",customerShoppingDb)//ruta que envia informacion de los estados de compra

router.post("/create",CreateProductDb)

router.put("/customerShopping/:id",customerShoppingStatusDb)//ruta para cambiar el estatus de la compra

router.put("/edit/:id", EditProductDb )

router.delete("/delete/:id", DeleteProductDb)

       

       



module.exports=router;