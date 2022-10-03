const { getAllProductApiService, getAllProudctsservice, getBasicProducts } = require('../service/allproductpets/getAllProductService');
const { getDbProductDetail } = require('../service/allproductpets/getProductDetailService');
const { getdbProdcutSearchService } = require('../service/allproductpets/getProdcutSearchService')


//// ruta para conseguir productos de la api //////
const getAllProductsData = async(req, res) => {
    const createBasicProducts = await getBasicProducts() //crea una base de las categoria,generos y productos en el db
    const allcreateproducts = await getAllProductApiService() //llama a la api para traer los accesorios de perros
    const getallproducts = await getAllProudctsservice() //realiza la peticion para enviar todos los productos
    res.status(200).json(getallproducts)
}


//// funcion para por medio del id conseguir el producto
const getProductDetail = async(req, res) => {
    try {
        const getproductDetail = await getDbProductDetail(req)
        res.status(202).json(getproductDetail)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//// funcion para busqueda por nombre 
const getProductSearch = async(req, res) => {
    try {
        const getProductSearch = await getdbProdcutSearchService(req)
        res.status(202).json(getProductSearch)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getAllProductsData,
    getProductDetail,
    getProductSearch
}