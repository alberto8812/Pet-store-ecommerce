const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale,SaleDetail}=db.models
const axios=require('axios');
const dataUser=require('../../middleware/loginUser')


const postProductUserCartService=async(req)=>{
     const {id,total,products}=req.body;
    //const accessToken=req.headers.authorization.split(' ')[1];
    //const dataEmail=await dataUser(accessToken);
    
    //const updateUser=await User.findOne({where:{email:dataEmail}})
 

 

   const saleDb=await Sale.create({invoice:id,total:total})
   console.log(Object.keys(saleDb.__proto__));
   for (const iterator of products) {
    const saleDetailDb=await SaleDetail.create({price:iterator.price,quantity:iterator.quantity,subtotal:iterator.subtotal})
    //console.log(Object.keys(saleDetailDb.__proto__));
    await saleDb.addSaleDetails(saleDetailDb.id)
   // await saleDetailDb.setSale(saleDb)
   console.log(saleDetailDb)
   }
 const dbSearchProduct = await Sale.findAll({
    where: {invoice:id},
    include: [{ model: SaleDetail, attributes: ["price","quantity","subtotal"] }]
})

    return  dbSearchProduct; //updateUser;
}

module.exports={postProductUserCartService}