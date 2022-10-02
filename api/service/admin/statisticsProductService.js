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
 
  

    return saleByMonthOrder;
}

const pieGraphicscategory=async(req)=>{
//trae todos las categorias
const categoryDb=await SaleDetail.findAll({attributes: [ "id", "subtotal"],include:{model:Product, attributes: { exclude: ["id", "detail","stock","price","stock","image","rating","age"] },include:[{model:Category,attributes: ['name']}]}})

//variable para al macenar  estadistica 
const category={}

//extraemos la categoria
const getCategory=categoryDb.map(data=>{
    return(
        data.products[0].category)
    
})

//conteo de categorias 
const arrayCategory=getCategory.map(element => {
            const name=element.name;
           if(category[name]===undefined){
                category[name]=0
           }
            
         return category[name]=category[name]+1;
        
         }
            );

 return category;
}
const piestatusProducts=async(req)=>{
    
    const statusProducts=await Sale.findAll({attributes:["status",[db.fn('COUNT', db.col('status')),'status_count']],group:['status']})
    
     return statusProducts ;
    }

const piestatususers=async(req)=>{
    
        const statusUsers=await User.findAll({attributes:["blockUser",[db.fn('COUNT', db.col('blockUser')),'status_blocK']],group:['blockUser']})

         return statusUsers ;
        }

module.exports={LineGraphicsSale,pieGraphicscategory,piestatusProducts,piestatususers}