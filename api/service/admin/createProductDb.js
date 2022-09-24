const {db,Op}=require('../../database/db')
const {Product,Genre,Category}=db.models


const createProductsDb=async(req)=>{
    let {name, price, stock, detail, image, rating, category, genre, age } = req.body
  //console.log(name)


 let productCreate = await Product.create({
          name, 
          price, 
          stock, 
          detail, 
          image, 
          rating,
          age
      })

      let categoryDb= await Category.findOne({ //buscamos en el modelo category todas las que coincidan con el nombre que llega por body. 
        where:{
            name: category //donde el nombre sea igual a la categoria que me llega por body
        }
     })

    let genreDb = await Genre.findOne({ 
      where:{
       name: genre
      }
    })
    
    //console.log(genreDb)
    
    //categoryDb.addGenre(genreDb) 
   // genreDb.addCategory(categoryDb) 

   // categoryDb.addProduct(productCreate) 
    await productCreate.setCategory(categoryDb.id)
   

   // genreDb.addProduct(productCreate)
     await productCreate.setGenre(genreDb.id)

//const data=await Genre.findAll({
   // where:{
   //     name:"dog"
  ////  },
    //include:[ {model:Product, attributes:['name']},{model:Category,attributes:['name']}]
//})

const data=await Product.findAll({
    where:{
        name:"sound ball"
    },
    include:[ {model:Genre, attributes:['name']},{model:Category,attributes:['name']}]
})

    return data
}


module.exports={
    createProductsDb
}