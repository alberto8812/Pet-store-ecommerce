const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale,SaleDetail, Review}=db.models
const axios=require('axios');
const dataUser=require('../../middleware/loginUser')


const postProductUserCartService=async(req)=>{
     const {id,total,products}=req.body;
    //const accessToken=req.headers.authorization.split(' ')[1];
    //const dataEmail=await dataUser(accessToken);
    
    //const updateUser=await User.findOne({where:{email:dataEmail}})
 

 

   const saleDb=await Sale.create({invoice:id,total:total})

 //  console.log(Object.keys(saleDb.__proto__));
 //ciclo for para destructurar los productos
   for (const iterator of products) {
    const saleDetailDb=await SaleDetail.create({price:iterator.price,quantity:iterator.quantity,subtotal:iterator.subtotal})
  
 
    const productDb=await Product.findOne({where:{id:iterator.id}})
   
 
    //consulta que permite indagar si el usuario ya exite en la tabla de reviews
    const findReviews=await Review.findOne({where:{user:"cvelascosaavedra@gmail.com",idProduct:iterator.id}});
    
    if(findReviews==null){//si el valor es null ingresa para registrar el usuario en la tabla
    const reviews=await Review.create({user:"cvelascosaavedra@gmail.com",idProduct:iterator.id})
    await productDb.addReview(reviews)//se realiza la relacion con la tabla de productos
    }

    //relaciones  de ña tablas  venta y detalle, relacion entre producto y detalle
    await saleDb.addSaleDetails(saleDetailDb)
    await saleDetailDb.addProduct(productDb)

    //descontamos el stock 
    await productDb.update({stock:productDb.stock-iterator.quantity})
    
 
   }

//consulta sobre los productos que estan en la venta
 const dbSearchProduct = await Sale.findAll({attributes: ['id','total','invoice'],
    where: {invoice:id},
    include: [{model: SaleDetail,attributes:['id','quantity','price','subtotal'],include:{model:Product,attributes: ['id','name'],include:[{model:Category,attributes: ['name']},{model:Genre,attributes: ['name']}]}}]///tra todso los productos
})


    return  dbSearchProduct; //updateUser;
}

module.exports={postProductUserCartService}