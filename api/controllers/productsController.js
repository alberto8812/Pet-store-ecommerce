const {getAllProductApiService,getAllProudctsservice,getBasicProducts}=require('../service/allproductpets/getAllProductService')

const {getDbProductDetail}=require('../service/allproductpets/getProductDetailService')




const  getAllProductsData=async(req,res)=>{
     const createBasicProducts=await getBasicProducts()//crea una base de las categoria,generos y productos en el db
     const allcreateproducts=await getAllProductApiService()//llama a la api para traer los accesorios de perros
     const getallproducts=await getAllProudctsservice()//realiza la peticion para enviar todos los productos
     res.status(200).json(getallproducts)
}



const getProductDetail=async(req,res)=>{
    try {
        const getproductDetail=await getDbProductDetail(req)
        res.status(200).json( getproductDetail) 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={
    getAllProductsData,
    getProductDetail
}