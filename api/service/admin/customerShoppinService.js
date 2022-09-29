const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale,SaleDetail}=db.models

const customerShoppinService=async()=>{
    

    const saleByMonth=await User.findAll({attributes: [ "id", "name","email"],include:{model:Sale,attributes: [ "id","invoice", "status","total"],include:{model:SaleDetail,attributes: [ "id", "quantity"],include:{model:Product,attributes: [ "id", "name"]}}   }})
    



return saleByMonth;
}

module.exports={customerShoppinService}