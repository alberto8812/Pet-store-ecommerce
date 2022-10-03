const {db}=require('../../database/db')
const {Product}=db.models

const deleteProductsDb = async (req, res)=>{

    let id = req.params.id
    let {value} = req.body
    // let productDeleted = await Product.findOne({
    //   where: {
    //     id, 
    //   }
    // })
    // productDeleted.destroy()
    if (value) {
    const deleted = await Product.update({deleted:true},
      {where:{
      id,
    }}) 
    const data = await Product.findOne({where:{id}})
    } else {
    const active = await Product.update({deleted:false},
      {where:{
      id,
    }}) 
    const data = await Product.findOne({where:{id}})
    }
    return 'producto borrado exitosamente'
    
}

module.exports={
  deleteProductsDb
}