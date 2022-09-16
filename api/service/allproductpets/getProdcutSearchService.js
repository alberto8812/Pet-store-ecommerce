const {db,Op}=require('../../database/db')
const {Product,Genre,Category}=db.models




///peticion a la api  para encontrar tos los productos que contengan la palabra de busqueda//
const getdbProdcutSearchService=async(req)=>{
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

    const dbSearchProduct=await Product.findAll({
        where: productCondiction,
        include:[ {model:Genre,attributes:['name'],where:genreCondition},{model:Category,attributes:['name'],where:categoryCondition}]
    })
    
    return dbSearchProduct;
}








module.exports={getdbProdcutSearchService}