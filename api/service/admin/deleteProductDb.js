const {db}=require('../../database/db')
const {Product}=db.models

const deleteProductsDb = async (req, res)=>{

    let id = req.params.id
    // let productDeleted = await Product.findOne({
    //   where: {
    //     id, 
    //   }
    // })

    // productDeleted.destroy()
    await Product.update({deleted:true},
      {where:{
      id,
    }}) 
    return 'producto borrado exitosamente'
    
}

module.exports={
  deleteProductsDb
}