const {getAllProductsDogService} = require('../service/dogs/getAllProductsDogService')
const {Product} = require('../database/db')

const getAllDogsData = async(req,res)=>{
     const allproducts = await getAllProductsDogService()
     
     res.status(200).json({msg:allproducts})
}

module.exports={
    getAllDogsData
}