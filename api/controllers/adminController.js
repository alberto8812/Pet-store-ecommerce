const {createProductsDb}=require('../service/admin/createProductDb')
const {deleteProductsDb} = require ('../service/admin/deleteProductDb')
const {LineGraphicsSale,pieGraphicscategory,piestatusProducts}=require('../service/admin/statisticsProductService')
const {customerShoppinService}=require('../service/admin/customerShoppinService')

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
    const statisticsProductpie=await pieGraphicscategory(req)
    const statisticsStatusProductpie=await piestatusProducts(req)
    res.status(202).json({statisticsProductpie:statisticsProductpie,statisticsProduct:statisticsProduct,statisticsStatusProductpie:statisticsStatusProductpie});
}

const  customerShoppingDb=async(req,res)=>{
    const listCustomerShopping = await customerShoppinService(req)
    res.status(202).json(listCustomerShopping);
}

module.exports={
        CreateProductDb,
        DeleteProductDb,
        statisticsProductDb,
        customerShoppingDb
    }