
const {db}=require('../../database/db')
const {Product,Genre,Category}=db.models


const getDbProductDetail=async(req)=>{
    const {id}=req.params
    console.log(id)
    const dbDetailProduct=await Product.findOne({where:{id},
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']}]})
      
return dbDetailProduct;
}

module.exports={getDbProductDetail}