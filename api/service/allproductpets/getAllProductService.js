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
        let dbCreateProducts = [];
        for (let iterator of catfood) {
            dbCreateProducts = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbfood.addProducts(dbCreateProducts);
            await dbCreateProducts.setCategory(dbfood);

            await dbCat.addProducts(dbCreateProducts);
            await dbCreateProducts.setGenre(dbCat);
        }

        let dbCatToys = [];
        for (let iterator of cattoys) {
            dbCatToys = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbtoys.addProducts(dbCatToys);
            await dbCatToys.setCategory(dbtoys);

            await dbCat.addProducts(dbCatToys);
            await dbCatToys.setGenre(dbCat);
        }
        let dbcataccessories = [];
        for (let iterator of cataccessories) {
            dbcataccessories = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbaccessories.addProducts(dbcataccessories);
            await dbcataccessories.setCategory(dbaccessories);

            await dbCat.addProducts(dbcataccessories);
            await dbcataccessories.setGenre(dbCat);
        }

        let dbDogFood = [];
        for (let iterator of dogFood) {
            dbDogFood = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbfood.addProducts(dbDogFood);
            await dbDogFood.setCategory(dbfood);

            await dbdog.addProducts(dbDogFood);
            await dbDogFood.setGenre(dbdog);
        }

        let dbDogToys = [];
        for (let iterator of dogtoys) {
            dbDogToys = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbtoys.addProducts(dbDogToys);
            await dbDogToys.setCategory(dbtoys);

            await dbdog.addProducts(dbDogToys);
            await dbDogToys.setGenre(dbdog);
        }

        let dbDogAcesories = [];
        for (let iterator of dogaccessories) {
            dbDogAcesories = await Product.create({
                name: iterator.name,
                price: iterator.price,
                stock: iterator.stock,
                detail: iterator.detail,
                image: iterator.image,
                rating: iterator.rating ? iterator.rating : '1',
                age:iterator.age

            })

            await dbaccessories.addProducts(dbDogAcesories);
            await dbDogAcesories.setCategory(dbaccessories);

            await dbdog.addProducts(dbDogAcesories);
            await dbDogAcesories.setGenre(dbdog);
        }
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
            age:res.age
        }
    })



    return allproductsOder
}




module.exports = {
    getAllProductApiService,
    getAllProudctsservice,
    getBasicProducts
}