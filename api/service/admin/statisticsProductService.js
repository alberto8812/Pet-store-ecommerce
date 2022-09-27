const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User,Sale,SaleDetail}=db.models




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

const pieGraphicscategory=async(req)=>{
const categoryByMonth=await SaleDetail.findAll({include:{model:Product,include:[{model:Category,attributes: ['name']}]}})


  
 return categoryByMonth;
}

module.exports={LineGraphicsSale,pieGraphicscategory}