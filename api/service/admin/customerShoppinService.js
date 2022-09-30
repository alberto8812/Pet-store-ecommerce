const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale,SaleDetail}=db.models

const customerShoppinService=async()=>{
    

    const saleByMonth=await User.findAll({attributes: [ "id", "name","email"],include:{model:Sale,attributes: [ "id","invoice", "status","total"],include:{model:SaleDetail,attributes: [ "id", "quantity"],include:{model:Product,attributes: [ "id", "name"]}}   }})
    



return saleByMonth;
}

const customerShoppingStatusService=async(req)=>{
    const {id}=req.params
    const {status}=req.body

    let customerShoppingStatus=[]
    if (status==='PENDING'){
        console.log("holi",status,id)
       customerShoppingStatus=await Sale.update({status:status},{where:{invoice:id}})
       console.log(customerShoppingStatus)
    }
    else if(status==='COMPLETED'){
        customerShoppingStatus=await Sale.update({status:status},{where:{invoice:id}})
    }
    //const saleByMonth=await User.findAll({attributes: [ "id", "name","email"],include:{model:Sale,attributes: [ "id","invoice", "status","total"],include:{model:SaleDetail,attributes: [ "id", "quantity"],include:{model:Product,attributes: [ "id", "name"]}}   }})
    



return customerShoppingStatus ;
}

module.exports={customerShoppinService,customerShoppingStatusService}