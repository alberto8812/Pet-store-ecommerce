
const {db}=require('../../database/db')
const {Product,Genre,Category,Review}=db.models


const getDbProductDetail=async(req)=>{
    const {id}=req.params
    const dbDetailProduct=await Product.findOne({where:{id},
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']},{model:Review,attributes:['id','comment','punctuation','user'] }]})
   
return dbDetailProduct;
}

module.exports={getDbProductDetail}