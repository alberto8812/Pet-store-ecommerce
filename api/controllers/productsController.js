const {getAllProductApiService,getAllProudctsservice,getBasicProducts}=require('../service/allproductpets/getAllProductService')

const  getAllProductsData=async(req,res)=>{
     const createBasicProducts=await getBasicProducts()
     const allcreateproducts=await getAllProductApiService()
     const getallproducts=await getAllProudctsservice()
     res.status(200).json(getallproducts)
}

module.exports={
    getAllProductsData
}