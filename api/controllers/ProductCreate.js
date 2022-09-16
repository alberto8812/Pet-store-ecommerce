const {createProductsDb}=require('../service/createProduct/createProductDb')




const CreateProductDb=async(req,res)=>{
    //console.log(req.body)
    const dbProductCreate=await createProductsDb(req)

    res.status(202).json(dbProductCreate)
}


module.exports={
    CreateProductDb
}