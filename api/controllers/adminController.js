const {createProductsDb}=require('../service/admin/createProductDb')


const CreateProductDb=async(req,res)=>{
    const dbProductCreate=await createProductsDb(req)

    res.status(202).json(dbProductCreate);
}


module.exports={
        CreateProductDb
    }