/*const axios = require('axios')


const getAllProductsDogService = async () => {
    const apiUrl =  await axios.get(`https://pet-elegant.herokuapp.com/api/products`)
    const apiInfo = await apiUrl.data.map(e =>{
        return{
            id: e.id,
            name: e.name,
            description: e.description,
            price: e.price,
            stock: e.stock,
            sales: e.sales,
            image: e.image,
            rating: e.rating,
            category: e.category
        }
    })
return apiInfo
}

module.exports = {
    getAllProductsDogService
}
*/