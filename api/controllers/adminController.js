const {createProductsDb}=require('../service/admin/createProductDb')
const {deleteProductsDb} = require ('../service/admin/deleteProductDb')
const {LineGraphicsSale,pieGraphicscategory,piestatusProducts}=require('../service/admin/statisticsProductService')
const {customerShoppinService,customerShoppingStatusService}=require('../service/admin/customerShoppinService')
const {editProductsDb}=require('../service/admin/editProductDb')

const CreateProductDb=async(req,res)=>{
    const dbProductCreate=await createProductsDb(req)

    res.status(202).json(dbProductCreate);
}

const DeleteProductDb = async(req, res)=>{
    const dbDeleteProduct = await deleteProductsDb(req)
    res.status(202).json({msg: dbDeleteProduct});

}

const EditProductDb = async(req, res)=>{
    const dbEditProduct = await editProductsDb(req)
    console.log('porque no sirveee')
    res.status(202).json({msg: dbEditProduct})
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

const customerShoppingStatusDb=async(req,res)=>{
    const customerShoppingStatus=await customerShoppingStatusService(req)
    res.status(202).json(customerShoppingStatus);
}



module.exports={
        CreateProductDb,
        DeleteProductDb,
        statisticsProductDb,
        customerShoppingDb,
        EditProductDb,
        customerShoppingStatusDb
    }