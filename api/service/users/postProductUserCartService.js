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
   for (const iterator of products) {
    const saleDetailDb=await SaleDetail.create({price:iterator.price,quantity:iterator.quantity,subtotal:iterator.subtotal})
  
   // console.log(Object.keys(saleDetailDb.__proto__));
    const productDb=await Product.findOne({where:{id:iterator.id}})

    const reviews=await Review.create({user:"cvelascosavedra@gmail.com"})
    await productDb.addReview(reviews)
    await saleDb.addSaleDetails(saleDetailDb)
    await saleDetailDb.addProduct(productDb)
    await productDb.update({stock:productDb.stock-iterator.quantity})
    
 
   }


 const dbSearchProduct = await Sale.findAll({attributes: ['id','total','invoice'],
   // where: {invoice:id},
    include: [{model: SaleDetail,attributes:['id','quantity','price','subtotal'],include:{model:Product,attributes: ['id','name'],include:[{model:Category,attributes: ['name']},{model:Genre,attributes: ['name']}]}}]///tra todso los productos
})


    return  dbSearchProduct; //updateUser;
}

module.exports={postProductUserCartService}