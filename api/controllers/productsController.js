const {getAllProductApiService,getAllProudctsservice,getBasicProducts}=require('../service/allproductpets/getAllProductService');
const {getDbProductDetail}=require('../service/allproductpets/getProductDetailService');
const {getdbProdcutName}=require('../service/allproductpets/getProductName')


//// ruta para conseguir productos de la api //////
const  getAllProductsData=async(req,res)=>{
     const createBasicProducts=await getBasicProducts()//crea una base de las categoria,generos y productos en el db
     const allcreateproducts=await getAllProductApiService()//llama a la api para traer los accesorios de perros
     const getallproducts=await getAllProudctsservice()//realiza la peticion para enviar todos los productos
     res.status(200).json(getallproducts)
}


//// funcion para por medio del id conseguir el producto
const getProductDetail=async(req,res)=>{
    try {
        const getproductDetail=await getDbProductDetail(req)
        res.status(202).json( getproductDetail) 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

//// funcion para busqueda por nombre 
const getProductName=async(req,res)=>{
    try {
        const getProductName=await getdbProdcutName(req)
        res.status(202).json(getProductName) 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={
    getAllProductsData,
    getProductDetail,
    getProductName
}