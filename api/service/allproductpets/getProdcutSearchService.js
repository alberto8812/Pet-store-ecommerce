const { db, Op } = require('../../database/db')
const { Product, Genre, Category,Review } = db.models




///peticion a la api  para encontrar tos los productos que contengan la palabra de busqueda//
const getdbProdcutSearchService=async(req)=>{
    const {genre,name,category,age}=req.query
    const productCondiction={}
    const genreCondition={};
    const categoryCondition={};
    const ageCondition={};

    if(age){
        ageCondition.age={[Op.iLike]:`%${age}%`}
       }
 
    if(category){
     categoryCondition.name=category
    }

    if (category) {
        categoryCondition.name = category
    }
    if (name) {
        productCondiction.name = {
            [Op.iLike]: `%${name}%` }
    }

    if (genre) {
        genreCondition.name = genre
    }

    const dbSearchProduct = await Product.findAll({
        where: [productCondiction, ageCondition],
        include: [{ model: Genre, attributes: ['name'], where: genreCondition }, { model: Category, attributes: ['name'], where: categoryCondition },{ model: Review, attributes: ['id','comment','punctuation','user'] }]
    })

    return dbSearchProduct;
}








module.exports = { getdbProdcutSearchService }