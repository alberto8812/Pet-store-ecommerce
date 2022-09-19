const {createProductsDb}=require('../service/admin/createProductDb')
const {deleteProductsDb} = require ('../service/admin/deleteProductDb')


const CreateProductDb=async(req,res)=>{
    const dbProductCreate=await createProductsDb(req)

    res.status(202).json(dbProductCreate);
}

const DeleteProductDb = async(req, res)=>{
    const dbDeleteProduct = await deleteProductsDb(req)
    res.status(202).json({msg: dbDeleteProduct});

}


module.exports={
        CreateProductDb,
        DeleteProductDb
    }