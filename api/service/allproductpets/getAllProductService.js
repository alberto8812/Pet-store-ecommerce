const axios = require('axios')
const { db } = require('../../database/db')
const { Product, Genre, Category } = db.models

const catfood = require('../../database/dbjson/catFood.json'); //archivo json con comida para gatos 
const cattoys = require('../../database/dbjson/cattoys.json'); //archivo json con juguetes para gatos
const cataccessories = require('../../database/dbjson/catAccessories.json'); //archivo  json con accesorios para gatos

const dogFood = require('../../database/dbjson/dogFood.json'); //archivo json con comida para perros
const dogtoys = require('../../database/dbjson/dogToys.json'); //archivo json con juguetes para perros
const dogaccessories = require('../../database/dbjson/dogAccesories.json'); //archivo  json con accesorios para perros


const datos = require('../../database/dbjson/catgen'); //archivo que contiene informacion de genero 

const LoadProduct=require('../../middleware/LoadProduct')

var ArrayAge = ['puppy', 'young', 'adult'];
var randomAge = Math.floor(Math.random()*ArrayAge.length);



const getBasicProducts = async() => {
    const { cat, dog } = datos

    const validation = await Genre.findAll() // busqueda  en la tabla genero
    !validation.length

    if (!validation.length) { //valida que la tabla este vacia  si no, no lo ejecuata

        //agrega contenido a la tabla genero 
        const dbCat = await Genre.create({ name: cat })
        const dbdog = await Genre.create({ name: dog })

        //agrega contenido a la talba categorias
        const dbfood = await Category.create({ name: "food" })
        const dbaccessories = await Category.create({ name: "accessories" })
        const dbtoys = await Category.create({ name: "toys" })

        /////////////////// asociaciones entre tablas genero y categorias ///////////////
        await dbCat.addCategory(dbfood)
        await dbfood.addGenre(dbCat)

        await dbCat.addCategory(dbaccessories)
        await dbaccessories.addGenre(dbCat)

        await dbCat.addCategory(dbtoys)
        await dbtoys.addGenre(dbCat)


        await dbdog.addCategory(dbfood)
        await dbfood.addGenre(dbdog)

        await dbdog.addCategory(dbaccessories)
        await dbaccessories.addGenre(dbdog)

        await dbdog.addCategory(dbtoys)
        await dbtoys.addGenre(dbdog)



        //////////////// carga de productos en la tabla, asociacion con genero y categoria  /////////////////////////////

        LoadProduct(dbfood,dbCat,catfood)
       

        LoadProduct(dbtoys,dbCat,cattoys)
  
        LoadProduct(dbaccessories,dbCat,cataccessories)
  
        LoadProduct(dbfood,dbdog,dogFood)
     
        LoadProduct(dbtoys,dbdog,dogtoys)
       
        LoadProduct(dbaccessories,dbdog,dogaccessories)
     
    }
    ///////////////////////////fin carga de productos iniciales/////////////////////////////////////////
    return;
}


const getAllProductApiService = async() => {

    ///peticion a la api /////////////////////////
    const checkData = await Product.findAll({where:{name:"Waterproof fleece coat"}})
    if (!checkData.length) {
        const apiUrl = (await axios.get(`https://pet-elegant.herokuapp.com/api/products`)).data
        const apiInfo = await apiUrl.data.map(e => {
            return {

                name: e.name,
                detail: e.description,
                price: e.price,
                stock: e.stock,
                sales: e.sales,
                image: e.image,
                rating: e.rating

            }
        })

        /////trae el genero y categoria  de perros/////////////////
        const findGenre = await Genre.findOne({
            where: {
                name: 'dog'
            }
        })
        const findcategory = await Category.findOne({
            where: {
                name: 'accessories'
            }
        })

        ///////recorre cada la variable que carga los productos  y los crea en tabla productos
        let dbCreateProducts = []
        for (const iterator of apiInfo) {

            dbCreateProducts = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:ArrayAge[randomAge]

            })

            ///realiza  asociaciones con tabla perros y categoria/////////////
            findcategory.addProducts(dbCreateProducts);
            dbCreateProducts.setCategory(findcategory);

            findGenre.addProducts(dbCreateProducts);
            dbCreateProducts.setGenre(findGenre);
        }
    }
    return;
}

const getAllProudctsservice = async() => {

    ///peticion a la base de datos, trae todos los productos 
    const allproducts = await Product.findAll({
        include: [{ model: Genre, attributes: ['name'] }, { model: Category, attributes: ['name'] }]
    })

    ////en desarrolllo para limpiar datos  pendiente ************///////
    const allproductsOder = allproducts.map(res => {

        return {
            id: res.id,
            name: res.name,
            price: res.price,
            stock: res.stock,
            detail: res.detail,
            image: res.image,
            rating: res.rating,
            genre: res.genre,
            category: res.category,
            age:res.age,
            deleted:res.deleted
        }
    })



    return allproductsOder
}




module.exports = {
    getAllProductApiService,
    getAllProudctsservice,
    getBasicProducts
}