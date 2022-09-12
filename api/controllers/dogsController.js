const {getAllProductsDogService}=require('../service/dogs/getallProductsDosService')

const getAllDogsData=async(req,res)=>{
     const allproducts=await getAllProductsDogService()
     
     res.status(200).json({msg:allproducts})
}

module.exports={
    getAllDogsData
}