const {db,Op}=require('../../database/db')
const { category } = require('../../database/dbjson/catgen')
const {Product,Genre,Category}=db.models



const testdb=async(req)=>{
   const {genre,name,category}=req.query
   
   const productCondiction={}
   const genreCondition={};
   const categoryCondition={};


   if(category){
    categoryCondition.name=category
   }
    if(name){
        productCondiction.name= {[Op.iLike]:`%${name}%`}
    }

   if(genre){
    genreCondition.name=genre
   }
   const findAllGenres=await Product.findAll({where:productCondiction,include:[{model:Genre,where:genreCondition},{model:Category,where:categoryCondition}]})
   


    return findAllGenres
}


module.exports={testdb}