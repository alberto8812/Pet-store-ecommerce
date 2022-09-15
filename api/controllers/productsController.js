// const {getAllProductApiService,getAllProudctsservice}=require('../service/allproductpets/getAllProductService')
const {Category, Product} = require('../database/db')

const postProduct = (req, res) => {

}

const  getAllProductsData=async(req,res)=>{
     const allproducts = Product.findAll()
     res.status(200).json(allproducts)
}

module.exports={
    getAllProductsData
}