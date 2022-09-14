const axios = require('axios')


const getAllProductService = async () => {
    const apiUrl =  await axios.get(`https://pet-elegant.herokuapp.com/api/products`)
    console.log(apiUrl.data)
    const apiInfo = await apiUrl.data.map(e =>{
        return{
          
            name: e.name,
            description: e.description,
            price: e.price,
            stock: e.stock,
            sales: e.sales,
            image: e.image,
            rating: e.rating,
           
        }
    })
return apiInfo
}

module.exports = {
    getAllProductService
}
