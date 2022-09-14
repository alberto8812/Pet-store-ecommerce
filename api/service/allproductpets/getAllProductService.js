const axios = require('axios')
const {db}=require('../../database/db')
const {Product}=db.models

const getAllProductService = async () => {
    const apiUrl =  (await axios.get(`https://pet-elegant.herokuapp.com/api/products`)).data
    const apiInfo = await apiUrl.data.map(e =>{
        return{
          
            name: e.name,
            detail: e.description,
            price: e.price,
            stock: e.stock,
            sales: e.sales,
            image: e.image,
            rating: e.rating,
           
        }
    })

    for (const iterator of apiInfo) {

        dbCreateProducts=await Product.findOrCreate({
        where:{name: iterator.name}
        })
    }

return apiInfo
}




module.exports = {
    getAllProductService
}
