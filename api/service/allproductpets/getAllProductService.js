const axios = require('axios')
const {db}=require('../../database/db')
const {Product,Genre,Category}=db.models

const catfood=require('../../database/dbjson/catFood.json');
const cattoys=require('../../database/dbjson/cattoys.json');
const cataccessories=require('../../database/dbjson/catAccessories.json');

const dogFood=require('../../database/dbjson/dogFood.json');
const dogtoys=require('../../database/dbjson/dogToys.json');
const dogaccessories=require('../../database/dbjson/dogAccesories.json');


const datos=require('../../database/dbjson/catgen');
const { category } = require('../../database/dbjson/catgen');



const getBasicProducts= async () =>{
    const {cat,dog,category} =datos

    const validation=await Genre.findAll()
    if(validation<1){
    const dbCat=await Genre.create({name:cat})
    const dbdog=await Genre.create({name:dog})
    //const dbcategory=await Category.bulkCreate(category)
    
    const dbfood=await Category.create({name:"food"})
    const dbaccessories=await Category.create({name:"accessories"})
    const dbtoys=await Category.create({name:"toys"})
    
     await dbCat.addCategory(dbfood)
     await dbfood.addGenre(dbCat)
    
     await dbCat.addCategory(dbaccessories)
     await dbaccessories.addGenre(dbCat)
    
     await dbCat.addCategory(dbtoys)
     await dbtoys.addGenre(dbCat)
    
     ///
     await dbdog.addCategory(dbfood)
     await dbfood.addGenre(dbdog)
    
     await dbdog.addCategory(dbaccessories)
     await dbaccessories.addGenre(dbdog)
    
     await dbdog.addCategory(dbtoys)
     await dbtoys.addGenre(dbdog)
    
    let dbCreateProducts=[];
    for (let iterator of catfood) {
      dbCreateProducts=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbfood.addProducts(dbCreateProducts);
            await dbCreateProducts.setCategory(dbfood);
    
            await dbCat.addProducts(dbCreateProducts);
            await dbCreateProducts.setGenre(dbCat);
    }

    let dbCatToys=[];
    for (let iterator of cattoys ) {
        dbCatToys=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbtoys.addProducts(dbCatToys);
            await dbCatToys.setCategory(dbtoys);
    
            await dbCat.addProducts(dbCatToys);
            await dbCatToys.setGenre(dbCat);
    }
    let dbcataccessories=[];
    for (let iterator of cataccessories ) {
        dbcataccessories=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbaccessories.addProducts(dbcataccessories);
            await dbcataccessories.setCategory(dbaccessories);
    
            await dbCat.addProducts(dbcataccessories);
            await dbcataccessories.setGenre(dbCat);
    }

    let dbDogFood=[];
    for (let iterator of dogFood ) {
        dbDogFood=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbfood.addProducts(dbDogFood);
            await dbDogFood.setCategory(dbfood);
    
            await dbdog.addProducts(dbDogFood);
            await dbDogFood.setGenre(dbdog);
    }

    let dbDogToys=[];
    for (let iterator of dogtoys ) {
        dbDogToys=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbtoys.addProducts(dbDogToys);
            await dbDogToys.setCategory(dbtoys);
    
            await dbdog.addProducts(dbDogToys);
            await dbDogToys.setGenre(dbdog);
    }

    let dbDogAcesories=[];
    for (let iterator of dogaccessories ) {
        dbDogAcesories=await Product.create({
        name: iterator.name,
        price:iterator.price,
        stock:iterator.stock,
        detail:iterator.detail,
        image:iterator.image,
        rating:iterator.rating?iterator.rating:'1',
    
    })
    
            await dbaccessories.addProducts(dbDogAcesories);
            await dbDogAcesories.setCategory(dbaccessories);
    
            await dbdog.addProducts(dbDogAcesories);
            await dbDogAcesories.setGenre(dbdog);
    }
}
return;
}




const getAllProductApiService = async () => {
 ///api rest call get clothes dog 
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


    const findGenre=await Genre.findOne({where:{
        name:'dog'
    }})
    const findcategory=await Category.findOne({where:{
        name:'accessories'
    }})
  
    let dbCreateProducts=[]
    for (const iterator of apiInfo) {

        dbCreateProducts=await Product.create({
            name: iterator.name,
            price:iterator.price,
            stock:iterator.stock,
            detail:iterator.detail,
            image:iterator.image,
            rating:iterator.rating?iterator.rating:'1',

        })
        findcategory.addProducts(dbCreateProducts);
        dbCreateProducts.setCategory(findcategory);

        findGenre.addProducts(dbCreateProducts);
        dbCreateProducts.setGenre(findGenre);
    }

return;
}

const getAllProudctsservice=async () =>{

    const allproducts= await Product.findAll({
        include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']}]
    })


    const allproductsOder=allproducts.map(res=>{
      
      return { 
        id:res.id,
        name:res.name,
        stock:res.stock,
        detail:res.detail,
        image:res.image,
        rating:res.rating,
        genre:res.genre,
        category:res.category
    }
    })



    return allproductsOder
}




module.exports = {
    getAllProductApiService,
    getAllProudctsservice,
    getBasicProducts
}
