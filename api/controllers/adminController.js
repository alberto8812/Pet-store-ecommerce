const {createProductsDb}=require('../service/admin/createProductDb')
const {deleteProductsDb} = require ('../service/admin/deleteProductDb')
const {LineGraphicsSale,pieGraphicscategory,piestatusProducts,piestatususers,productsCount}=require('../service/admin/statisticsProductService')
const {customerShoppinService,customerShoppingStatusService}=require('../service/admin/customerShoppinService')
const {editProductsDb}=require('../service/admin/editProductDb')
const {dataUserstoreService,editUsersAdminService}=require('../service/admin/dataUserstoreService')



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

    //entrega todso las graficas  para el admin
    const statisticsProduct = await LineGraphicsSale(req)
    const statisticsProductpie=await pieGraphicscategory(req)
    const statisticsStatusProductpie=await piestatusProducts(req)
    const statisticsStatusUserpie=await piestatususers(req)
    const productsCounttotal=await productsCount(req)
    productsCount
    res.status(202).json({statisticsProductpie:statisticsProductpie,statisticsProduct:statisticsProduct,statisticsStatusProductpie:statisticsStatusProductpie,statisticsStatusUserpie:statisticsStatusUserpie,productsCounttotal:productsCounttotal});
}

const  customerShoppingDb=async(req,res)=>{
    //estado de las compras
    const listCustomerShopping = await customerShoppinService(req)
    res.status(202).json(listCustomerShopping);
}
const  dataUserstoreDb=async(req,res)=>{
    //datos de todos los usuarios
    const dataUserstore = await dataUserstoreService(req)
    res.status(202).json(dataUserstore);
}



const customerShoppingStatusDb=async(req,res)=>{
   //entrega el estado activo o inactivo de los usuarios 
    const customerShoppingStatus=await customerShoppingStatusService(req)
    res.status(202).json(customerShoppingStatus);
}

const  editUsersAdminDb=async(req,res)=>{
    //edita los usuarios el admin
    const editUsersAdmin=await editUsersAdminService(req)
    res.status(202).json({msg:editUsersAdmin});
}

module.exports={
        CreateProductDb,
        DeleteProductDb,
        statisticsProductDb,
        customerShoppingDb,
        EditProductDb,
        customerShoppingStatusDb,
        dataUserstoreDb,
        editUsersAdminDb
    }