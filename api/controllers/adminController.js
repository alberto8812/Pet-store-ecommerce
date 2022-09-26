const {createProductsDb}=require('../service/admin/createProductDb')
const {deleteProductsDb} = require ('../service/admin/deleteProductDb')
const {LineGraphicsSale}=require('../service/admin/statisticsProductService')

const CreateProductDb=async(req,res)=>{
    const dbProductCreate=await createProductsDb(req)

    res.status(202).json(dbProductCreate);
}

const DeleteProductDb = async(req, res)=>{
    const dbDeleteProduct = await deleteProductsDb(req)
    res.status(202).json({msg: dbDeleteProduct});

}


const statisticsProductDb=async(req,res)=>{
    const statisticsProduct = await LineGraphicsSale(req)
    res.status(202).json(statisticsProduct);
}

module.exports={
        CreateProductDb,
        DeleteProductDb,
        statisticsProductDb
    }