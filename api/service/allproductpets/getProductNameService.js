const {db,Op}=require('../../database/db')
const {Product,Genre,Category}=db.models




///peticion a la api  para encontrar tos los productos que contengan la palabra de busqueda//
const getdbProdcutNameService=async(req)=>{
    const {name}=req.query
    const dbNameProduct=await Product.findAll({
        where:{
            name:{
                [Op.iLike]:`%${name}%`
            }        
        },
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']}]
    })
    return dbNameProduct;
}








module.exports={getdbProdcutNameService}