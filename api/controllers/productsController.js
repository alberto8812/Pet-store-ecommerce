const {getAllProductService}=require('../service/allproductpets/getAllProductService')

const  getAllProductsData=async(req,res)=>{
     const allproducts=await getAllProductService()
     
     res.status(200).json({msg:allproducts})
}

module.exports={
    getAllProductsData
}