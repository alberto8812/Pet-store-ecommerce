<<<<<<< HEAD
// const {getAllProductApiService,getAllProudctsservice}=require('../service/allproductpets/getAllProductService')
const {Category, Product} = require('../database/db')

const postProduct = (req, res) => {

}

const  getAllProductsData=async(req,res)=>{
     const allproducts = Product.findAll()
     res.status(200).json(allproducts)
=======
const {getAllProductApiService,getAllProudctsservice,getBasicProducts}=require('../service/allproductpets/getAllProductService')

const  getAllProductsData=async(req,res)=>{
     const createBasicProducts=await getBasicProducts()
     const allcreateproducts=await getAllProductApiService()
     const getallproducts=await getAllProudctsservice()
     res.status(200).json(getallproducts)
>>>>>>> main
}

module.exports={
    getAllProductsData
}