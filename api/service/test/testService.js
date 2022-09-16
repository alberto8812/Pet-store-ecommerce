const {db,Op}=require('../../database/db')
const {Product,Genre,Category}=db.models



const testdb=async(req)=>{
   const {genre,name}=req.query
   
   const productCondiction={}
   const genreCondition={};

    if(name){
        productCondiction.name= {[Op.iLike]:`%${name}%`}
    }

   if(genre){
    genreCondition.name=genre
   }
   const findAllGenres=await Product.findAll({where:productCondiction,include:[{model:Genre,where:genreCondition}]})
   


    return findAllGenres
}


module.exports={testdb}