const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale}=db.models




const LineGraphicsSale=async(req)=>{
     
    //const accessToken=req.headers.authorization.split(' ')[1];
    //const dataEmail=await dataUser(accessToken);
    const saleByMonth=await Sale.findAll({attributes:['month',[db.fn('sum',db.col('total')),'total'],],where:{year:2022},group:['month']})
     
    const saleByMonthOrder={
        month:[],
        total:[]
    }
  
    saleByMonth.map(data=>{
        saleByMonthOrder.month=[...saleByMonthOrder.month,data.month]
        saleByMonthOrder.total=[...saleByMonthOrder.total,data.total]
        return data;
    })
 
   console.log(saleByMonthOrder)

    return saleByMonthOrder;
}

module.exports={LineGraphicsSale}