const {db}=require('../../database/db')
const {Product}=db.models

const deleteProductsDb = async (req, res)=>{

    let id = req.params.id 
    const productDeleted = await Product.findOne({
      where:{
        id, 
      }
    })
    await productDeleted.destroy()
   
    return 'producto borrado exitosamente'
    
}

module.exports={
  deleteProductsDb
}