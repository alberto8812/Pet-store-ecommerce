
const {db}=require('../../database/db')
<<<<<<< HEAD
const {Product,Genre,Category, Review}=db.models
=======
const {Product,Genre,Category,Review}=db.models
>>>>>>> a6208a99dcfaebfa20f15c4b3e67da2bad327da9


const getDbProductDetail=async(req)=>{
    const {id}=req.params
    const dbDetailProduct=await Product.findOne({where:{id},
<<<<<<< HEAD
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']}, {model:Review }]})
      console.log(dbDetailProduct)
=======
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']},{model:Review,attributes:['id','comment','punctuation','user'] }]})
   
>>>>>>> a6208a99dcfaebfa20f15c4b3e67da2bad327da9
return dbDetailProduct;
}

module.exports={getDbProductDetail}