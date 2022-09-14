const axios = require('axios')
const {db}=require('../../database/db')
const {Product}=db.models

const getAllProductApiService = async () => {
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
    let dbCreateProducts=[]
    for (const iterator of apiInfo) {

        dbCreateProducts=await Product.findOrCreate({
        where:{
            name: iterator.name,
            price:iterator.price,
            stock:iterator.stock,
            detail:iterator.detail,
            image:iterator.image,
            rating:iterator.rating?iterator.rating:'1',
        
        }
        })
    }

return dbCreateProducts
}

const getAllProudctsservice=async () =>{
    return await Product.findAll()
}




module.exports = {
    getAllProductApiService,
    getAllProudctsservice
}
